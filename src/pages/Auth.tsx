import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { signUpSchema, signInSchema, SignUpFormData, SignInFormData } from "@/lib/auth-schemas";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        const validation = signUpSchema.safeParse(formData);
        if (!validation.success) {
          const fieldErrors: Record<string, string> = {};
          validation.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0].toString()] = err.message;
            }
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        
        if (error) {
          if (error.message.includes("already registered")) {
            toast({
              title: "خطا",
              description: "این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "خطا",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "موفق",
            description: "حساب کاربری شما ایجاد شد! در حال ورود...",
          });
          navigate("/dashboard");
        }
      } else {
        const validation = signInSchema.safeParse({
          email: formData.email,
          password: formData.password,
        });
        
        if (!validation.success) {
          const fieldErrors: Record<string, string> = {};
          validation.error.errors.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0].toString()] = err.message;
            }
          });
          setErrors(fieldErrors);
          setIsSubmitting(false);
          return;
        }

        const { error } = await signIn(formData.email, formData.password);
        
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              title: "خطا",
              description: "ایمیل یا رمز عبور اشتباه است.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "خطا",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "خوش آمدید",
            description: "با موفقیت وارد شدید!",
          });
          navigate("/dashboard");
        }
      }
    } catch (error) {
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="glass-card p-8 rounded-3xl space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-block">
              <div className="text-3xl font-bold gradient-text mb-2">AegisIndex</div>
            </Link>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles size={16} />
              <span className="text-sm">بهینه‌سازی هوشمند با هوش مصنوعی</span>
            </div>
          </div>

          {/* Toggle */}
          <div className="flex gap-2 p-1 glass-card rounded-xl">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                !isSignUp
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ورود
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                isSignUp
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">نام کامل</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-muted/50 border-border/50"
                  placeholder="نام و نام خانوادگی"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted/50 border-border/50"
                placeholder="example@email.com"
                dir="ltr"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">رمز عبور</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-muted/50 border-border/50"
                placeholder="حداقل ۶ کاراکتر"
                dir="ltr"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-6 glow-gold group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "در حال پردازش..."
              ) : (
                <>
                  {isSignUp ? "ثبت‌نام" : "ورود"}
                  <ArrowRight className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                </>
              )}
            </Button>
          </form>

          {/* Back to Home */}
          <div className="text-center pt-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
