import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { icon: LayoutDashboard, label: "وضعیت سایت", path: "/dashboard" },
  { icon: FileText, label: "گزارش‌ها", path: "/dashboard/reports" },
  { icon: Settings, label: "تنظیمات دامنه", path: "/dashboard/settings" }
];

const Sidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "خطا",
        description: "مشکلی در خروج پیش آمد",
        variant: "destructive",
      });
    }
  };

  return (
    <aside className="hidden md:flex w-64 glass-card border-l border-border/50 min-h-screen p-6 flex-col">
      {/* Logo */}
      <Link to="/" className="mb-8">
        <div className="text-xl sm:text-2xl font-bold gradient-text">AegisIndex</div>
      </Link>

      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-accent/20 text-accent border border-accent/30"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <Button 
        variant="outline" 
        className="w-full justify-start gap-3 border-border/50 text-sm"
        onClick={handleLogout}
      >
        <LogOut size={20} />
        <span>خروج</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
