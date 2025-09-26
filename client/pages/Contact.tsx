import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:admissions.patna@amity.edu?subject=Enquiry%20from%20${encodeURIComponent(
      form.name || "Prospective Student",
    )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-extrabold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          Reach out to our admissions and support teams. We are happy to assist.
        </p>
      </motion.header>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="grid gap-3 text-sm">
          <a href="tel:+919999999999" className="inline-flex items-center gap-2">
            <span className="font-semibold">Phone:</span>
            <span className="text-primary">+91 99999 99999</span>
          </a>
          <a
            href="mailto:admissions.patna@amity.edu"
            className="inline-flex items-center gap-2"
          >
            <span className="font-semibold">Email:</span>
            <span className="text-primary">admissions.patna@amity.edu</span>
          </a>
          <a
            href="https://maps.google.com/?q=Amity+University+Patna"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <span className="font-semibold">Address:</span>
            <span className="text-primary">Patna, Bihar, India</span>
          </a>
          <p className="text-muted-foreground mt-2">
            Monday to Friday, 9:00 AM – 6:00 PM
          </p>
          <div className="overflow-hidden rounded-xl border shadow-sm mt-4">
            <iframe
              title="Amity University Patna Map"
              src="https://www.google.com/maps?q=Amity%20University%20Patna&output=embed"
              className="h-64 w-full md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section>
          <form onSubmit={onSubmit} className="grid gap-4 rounded-xl border p-5">
            <h2 className="text-lg font-semibold">Send us a message</h2>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input
                className="input"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Email</span>
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </label>
            <label className="grid gap-1">
              <span className="text-sm font-medium">Message</span>
              <textarea
                className="input"
                rows={6}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                required
              />
            </label>
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90">
              Send Email
            </button>
          </form>
        </section>
      </div>

      <style>{`
        .input { @apply w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2; }
      `}</style>
    </div>
  );
}
