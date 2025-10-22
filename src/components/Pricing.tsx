import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "پلن اولیه",
    price: "۲,۰۰۰,۰۰۰",
    period: "ماهانه",
    description: "مناسب برای شروع",
    features: [
      "بررسی هفتگی سایت",
      "گزارش تحلیلی جامع",
      "بهینه‌سازی پایه سئو",
      "پشتیبانی ایمیلی",
      "پنل کاربری اختصاصی"
    ],
    highlighted: false
  },
  {
    name: "پلن پیشرفته",
    price: "۵,۰۰۰,۰۰۰",
    period: "ماهانه",
    description: "برای رشد سریع‌تر",
    features: [
      "بررسی روزانه سایت",
      "بهینه‌سازی خودکار",
      "گزارش تحلیلی لحظه‌ای",
      "پشتیبانی اختصاصی",
      "مشاوره رایگان",
      "اولویت در پردازش"
    ],
    highlighted: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            پلن‌های <span className="gradient-text">قیمت‌گذاری</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            پلن مناسب خود را انتخاب کنید و رشد سایت را تجربه کنید
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-3xl p-8 transition-all hover-scale ${
                plan.highlighted 
                  ? 'border-accent/50 glow-gold' 
                  : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  محبوب‌ترین 🔥
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-base sm:text-lg text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">{plan.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">تومان</span>
                </div>
                <div className="text-sm sm:text-base text-muted-foreground mt-1">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-accent" size={14} />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/dashboard" className="block">
                <Button 
                  className={`w-full font-bold text-lg py-6 ${
                    plan.highlighted 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90 glow-gold' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  انتخاب پلن
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            تمامی پلن‌ها شامل ۷ روز ضمانت بازگشت وجه می‌باشند
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
