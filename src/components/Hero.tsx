import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card border border-accent/30 text-accent">
            <Sparkles size={16} />
            <span className="text-xs sm:text-sm font-medium">قدرت هوش مصنوعی برای سایت شما</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="inline-flex items-center gap-3 sm:gap-4">
              بهینه‌سازی هوشمند سایت
              <Brain className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-accent glow-gold animate-pulse" />
            </span>
            <br />
            <span className="gradient-text">با هوش مصنوعی</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AegisIndex سایت شما را تحلیل، اصلاح و برای گوگل و ChatGPT ایندکس می‌کند.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-2xl mx-auto">
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
