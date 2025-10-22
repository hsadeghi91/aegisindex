import { Search, FileText, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "بررسی فنی و سئو",
    description: "تحلیل جامع ساختار فنی، سرعت و بهینه‌سازی موتورهای جستجو با هوش مصنوعی پیشرفته"
  },
  {
    icon: FileText,
    title: "تولید متادیتا خودکار",
    description: "ساخت و اصلاح خودکار متاتگ‌ها، توضیحات و کلمات کلیدی برای هر صفحه"
  },
  {
    icon: TrendingUp,
    title: "گزارش تحلیلی هفتگی",
    description: "دریافت گزارش‌های دقیق از عملکرد، رتبه‌بندی و پیشنهادات بهبود هفتگی"
  },
  {
    icon: Shield,
    title: "امنیت و سرعت بالا",
    description: "بررسی امنیت سایت، بهینه‌سازی سرعت بارگذاری و پایش مداوم عملکرد"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            ویژگی‌های <span className="gradient-text">منحصر به فرد</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            همه چیز برای بهینه‌سازی و رشد سایت شما
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-4 rounded-full">
            <p className="text-accent font-semibold">
              ✨ تمامی ویژگی‌ها با هوش مصنوعی پیشرفته قدرت گرفته‌اند
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
