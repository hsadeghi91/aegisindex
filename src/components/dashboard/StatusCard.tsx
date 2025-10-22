import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

const StatusCard = ({ title, value, icon: Icon, trend, trendUp }: StatusCardProps) => {
  return (
    <div className="glass-card p-6 rounded-2xl hover:border-accent/50 transition-all hover-scale">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Icon className="text-accent" size={24} />
        </div>
        {trend && (
          <div className={`text-sm font-semibold ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
            {trend}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </div>
    </div>
  );
};

export default StatusCard;
