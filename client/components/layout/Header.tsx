import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Courses", to: "/#courses" },
  { label: "Campus Tour", to: "/#campus" },
  { label: "Events", to: "/#events" },
  { label: "Admissions", to: "/#admissions" },
  { label: "Student Life", to: "/#student-life" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActiveTo = (to: string) => {
    if (to === "/")
      return (
        location.pathname === "/" && (!location.hash || location.hash === "")
      );
    if (to.startsWith("/#")) {
      const hash = to.slice(1); // "#section"
      return location.pathname === "/" && location.hash === hash;
    }
    return location.pathname.startsWith(to);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70 transition-all",
        scrolled
          ? "bg-white/90 shadow-sm dark:bg-background/80"
          : "bg-white/70 dark:bg-background/60",
      )}
    >
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
              isActive={isActiveTo(item.to)}
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
      {open && (
        <div className="md:hidden border-t bg-white/95 dark:bg-background/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                to={item.to}
                onClick={close}
                isActive={isActiveTo(item.to)}
              >
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
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={cn(
        "px-3 py-2 text-sm rounded-md transition-colors hover:text-primary hover:bg-primary/10",
        isActive && "text-primary bg-primary/10",
      )}
    >
      {children}
    </NavLink>
  );
}

function MobileNavItem({
  to,
  onClick,
  children,
  isActive,
}: {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={cn(
        "px-3 py-2 text-sm rounded-md transition-colors hover:text-primary hover:bg-primary/10",
        isActive && "text-primary bg-primary/10",
      )}
    >
      {children}
    </NavLink>
  );
}
