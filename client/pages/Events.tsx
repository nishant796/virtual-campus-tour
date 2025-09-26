import { motion } from "framer-motion";

type Event = { title: string; date: string; media: string; description?: string };

const events = {
  upcoming: [
    {
      title: "Tech Fest 2025",
      date: "Nov 18, 2025",
      media:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
      description: "Keynotes, hackathon, project expo, and workshops.",
    },
    {
      title: "Admissions Open House",
      date: "Dec 05, 2025",
      media:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      description: "Campus tour, faculty interaction, and counseling.",
    },
  ],
  past: [
    {
      title: "Cultural Night 2024",
      date: "Apr 02, 2024",
      media:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Sports Meet 2024",
      date: "Feb 10, 2024",
      media:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1400&auto=format&fit=crop",
    },
  ],
};

export default function Events() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-extrabold tracking-tight">Events</h1>
        <p className="mt-2 text-muted-foreground">
          Stay updated with upcoming events and revisit highlights from past
          campus activities.
        </p>
      </motion.header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-primary">Upcoming</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {events.upcoming.map((e) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <img src={e.media} alt={e.title} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="font-semibold">{e.title}</div>
                <div className="text-xs text-muted-foreground">{e.date}</div>
                {e.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
                )}
                <div className="mt-3">
                  <a
                    href="mailto:admissions.patna@amity.edu?subject=Event%20Registration"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Register Interest
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-primary">Past</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.past.map((e) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <img src={e.media} alt={e.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="font-semibold">{e.title}</div>
                <div className="text-xs text-muted-foreground">{e.date}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
