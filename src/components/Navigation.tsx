import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { name: "خانه", path: "/" },
    { name: "ویژگی‌ها", path: "/#features" },
    { name: "قیمت", path: "/#pricing" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-bold gradient-text">AegisIndex</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            {user ? (
              <Link to="/dashboard">
                <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  داشبورد
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  ورود / ثبت‌نام
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="block text-foreground/80 hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {user ? (
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  داشبورد
                </Button>
              </Link>
            ) : (
              <Link to="/auth" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  ورود / ثبت‌نام
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
