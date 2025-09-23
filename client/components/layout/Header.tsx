import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Courses", to: "/courses" },
  { label: "Campus Tour", to: "/#campus" },
  { label: "Events", to: "/#events" },
  { label: "Admissions", to: "/#admissions" },
  { label: "Contact", to: "/#contact" },
  { label: "Student Resources", to: "/#resources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-extrabold">
            AU
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-primary text-base sm:text-lg">
              Amity University
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Patna Campus
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              to={item.to}
              isActive={location.pathname === item.to}
            >
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-foreground shadow-sm hover:bg-muted/60"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/95 dark:bg-background/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} to={item.to} onClick={close}>
                {item.label}
              </MobileNavItem>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 text-sm rounded-md transition-colors hover:text-primary hover:bg-primary/10",
          isActive && "text-primary bg-primary/10",
        )
      }
    >
      {children}
    </NavLink>
  );
}

function MobileNavItem({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 text-sm rounded-md transition-colors hover:text-primary hover:bg-primary/10",
          isActive && "text-primary bg-primary/10",
        )
      }
    >
      {children}
    </NavLink>
  );
}
