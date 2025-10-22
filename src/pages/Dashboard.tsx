import Sidebar from "@/components/dashboard/Sidebar";
import StatusCard from "@/components/dashboard/StatusCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RecentAnalysis from "@/components/dashboard/RecentAnalysis";
import { Activity, TrendingUp, Zap, Globe } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">داشبورد</h1>
            <p className="text-muted-foreground">خلاصه وضعیت و عملکرد سایت شما</p>
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
