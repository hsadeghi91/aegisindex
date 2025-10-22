import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-24 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">AegisIndex</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              هوش مصنوعی برای ایندکس و بهینه‌سازی خودکار سایت شما
            </p>
          </div>

          {/* Links - Product */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">محصول</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-muted-foreground hover:text-accent transition-colors">
                  ویژگی‌ها
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-muted-foreground hover:text-accent transition-colors">
                  قیمت‌گذاری
                </a>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-accent transition-colors">
                  داشبورد
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">شرکت</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  بلاگ
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">قوانین</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  قوانین استفاده
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  حریم خصوصی
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  امنیت
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © ۲۰۲۵ AegisGhost Inc — تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
