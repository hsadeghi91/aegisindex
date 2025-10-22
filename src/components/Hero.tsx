import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-optimization.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section - Right Side in RTL */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-right animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card border border-accent/30 text-accent">
              <Sparkles size={16} />
              <span className="text-xs sm:text-sm font-medium">قدرت هوش مصنوعی برای سایت شما</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="inline-flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                بهینه‌سازی هوشمند سایت
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-accent glow-gold animate-pulse" />
              </span>
              <br />
              <span className="gradient-text">با هوش مصنوعی</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              AegisIndex سایت شما را تحلیل، اصلاح و برای گوگل و ChatGPT ایندکس می‌کند.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 glow-gold hover-scale group"
                >
                  شروع کنید
                  <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                مشاهده نمونه‌کار
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">۹۸٪</div>
                <div className="text-xs sm:text-sm text-muted-foreground">بهبود سئو</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">۲۴/۷</div>
                <div className="text-xs sm:text-sm text-muted-foreground">نظارت مداوم</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">۱۰۰+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">مشتری راضی</div>
              </div>
            </div>
          </div>

          {/* Image Section - Left Side in RTL */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden glass-card border border-primary/30 glow-blue">
              <img 
                src={heroImage} 
                alt="بهینه‌سازی هوشمند سایت با هوش مصنوعی" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
