import { Home, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex h-12 w-24 items-center justify-center rounded border-2 border-foreground">
            <span className="text-xl font-bold">LOGO</span>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="rounded-lg p-2 transition-colors hover:bg-accent" aria-label="Home">
            <Home className="h-5 w-5" />
          </Link>
          <button className="rounded-lg p-2 transition-colors hover:bg-accent" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <Link to="/user/1" className="rounded-lg p-2 transition-colors hover:bg-accent" aria-label="Profile">
            <User className="h-5 w-5 text-primary" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
