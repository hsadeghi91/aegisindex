import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const analyses = [
  {
    title: "بهینه‌سازی سرعت صفحات",
    date: "۲ ساعت پیش",
    status: "completed",
    description: "سرعت بارگذاری ۳۵٪ بهبود یافت"
  },
  {
    title: "بروزرسانی متادیتا",
    date: "۵ ساعت پیش",
    status: "completed",
    description: "۱۵ صفحه بهینه‌سازی شد"
  },
  {
    title: "بررسی امنیتی",
    date: "۸ ساعت پیش",
    status: "in-progress",
    description: "در حال پردازش..."
  },
  {
    title: "تحلیل رقبا",
    date: "۱۲ ساعت پیش",
    status: "warning",
    description: "نیاز به بررسی بیشتر"
  }
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  "in-progress": {
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  warning: {
    icon: AlertCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  }
};

const RecentAnalysis = () => {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <h3 className="text-xl font-bold mb-6">آخرین تحلیل‌ها</h3>
      <div className="space-y-4">
        {analyses.map((analysis, index) => {
          const config = statusConfig[analysis.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;
          
          return (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                <StatusIcon className={config.color} size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{analysis.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{analysis.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{analysis.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentAnalysis;
