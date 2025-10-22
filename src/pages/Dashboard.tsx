import Sidebar from "@/components/dashboard/Sidebar";
import StatusCard from "@/components/dashboard/StatusCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RecentAnalysis from "@/components/dashboard/RecentAnalysis";
import { Activity, TrendingUp, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      
      {/* Mobile Header */}
      <div className="md:hidden glass-card border-b border-border/50 p-4">
        <Link to="/">
          <div className="text-xl font-bold gradient-text">AegisIndex</div>
        </Link>
      </div>
      
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold">داشبورد</h1>
            <p className="text-sm sm:text-base text-muted-foreground">خلاصه وضعیت و عملکرد سایت شما</p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusCard
              title="امتیاز سئو"
              value="۹۲/۱۰۰"
              icon={TrendingUp}
              trend="+۸٪"
              trendUp={true}
            />
            <StatusCard
              title="صفحات ایندکس شده"
              value="۱۲۴"
              icon={Globe}
              trend="+۱۵"
              trendUp={true}
            />
            <StatusCard
              title="سرعت سایت"
              value="۸۵/۱۰۰"
              icon={Zap}
              trend="+۱۲٪"
              trendUp={true}
            />
            <StatusCard
              title="وضعیت سیستم"
              value="عالی"
              icon={Activity}
            />
          </div>

          {/* Chart */}
          <PerformanceChart />

          {/* Recent Analysis */}
          <RecentAnalysis />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
