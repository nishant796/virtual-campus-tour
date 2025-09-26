import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-extrabold">
              AU
            </div>
            <div>
              <div className="font-bold text-primary">
                Amity University Patna
              </div>
              <div className="text-sm text-muted-foreground">
                Nurturing talent. Transforming lives.
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-prose">
            A modern, student-first campus fostering academic excellence,
            research, innovation and holistic development across disciplines.
          </p>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-primary"><Facebook size={18} /></a>
            <a aria-label="Instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-primary"><Instagram size={18} /></a>
            <a aria-label="Twitter" href="https://x.com/" target="_blank" rel="noreferrer" className="hover:text-primary"><Twitter size={18} /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-primary"><Linkedin size={18} /></a>
            <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-primary"><Youtube size={18} /></a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/courses" className="hover:text-primary">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/campus-tour" className="hover:text-primary">
                Campus Tour
              </Link>
            </li>
            <li>
              <Link to="/#student-life" className="hover:text-primary">
                Student Life
              </Link>
            </li>
            <li>
              <Link to="/#admissions" className="hover:text-primary">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/#events" className="hover:text-primary">
                Events
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="tel:+919999999999" className="hover:text-primary">
                +91 99999 99999
              </a>
            </li>
            <li>
              <a
                href="mailto:admissions.patna@amity.edu"
                className="hover:text-primary"
              >
                admissions.patna@amity.edu
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Amity+University+Patna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Patna, Bihar, India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Amity University Patna</p>
          <p>Built with care for students and community</p>
        </div>
      </div>
    </footer>
  );
}
