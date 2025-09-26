import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const heroImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1600&auto=format&fit=crop",
];

const ugCourses = [
  { title: "B.Tech (CSE)", desc: "AI, ML, Data Science, Cybersecurity" },
  { title: "BBA", desc: "Business Analytics, Marketing, Finance" },
  { title: "BCA", desc: "Full-Stack Development, Cloud, DevOps" },
];

const pgCourses = [
  { title: "MBA", desc: "Leadership, Strategy, Entrepreneurship" },
  { title: "MCA", desc: "Advanced Software, Cloud & Security" },
  { title: "M.Sc (Data Science)", desc: "ML, Big Data, Visualization" },
];

const campusImages = [
  {
    cat: "Classrooms",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    cat: "Library",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    cat: "Labs",
    url: "https://images.unsplash.com/photo-1551281044-8a5d2f6df31a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    cat: "Hostels",
    url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    cat: "Sports",
    url: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1200&auto=format&fit=crop",
  },
  {
    cat: "Culture",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
];

const campusVideos = [
  {
    title: "Campus Walkthrough",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    title: "Student Life Highlights",
    url: "https://media.w3.org/2010/05/bunny/trailer.mp4",
  },
  {
    title: "Library & Labs",
    url: "https://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    title: "Sports Complex",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    title: "Cultural Events",
    url: "https://media.w3.org/2010/05/video/movie_300.mp4",
  },
  {
    title: "Campus Facilities",
    url: "https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4",
  },
];

const events = {
  upcoming: [
    {
      title: "Tech Fest 2025",
      date: "Nov 18, 2025",
      media:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Admissions Open House",
      date: "Dec 05, 2025",
      media:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  past: [
    {
      title: "Cultural Night 2024",
      date: "Apr 02, 2024",
      media:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sports Meet 2024",
      date: "Feb 10, 2024",
      media:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-background" />
          <div className="absolute -left-1/4 top-[-10%] h-[50rem] w-[50rem] rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -right-1/4 bottom-[-20%] h-[45rem] w-[45rem] rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                Welcome to Amity University Patna
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Explore Our Vibrant Campus & Academic Excellence
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-prose">
                Discover world-class programs, state-of-the-art infrastructure,
                and a student-first environment with rich cultural and sports
                opportunities.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
                >
                  Apply for Admissions
                </a>
                <a
                  href="#campus"
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow hover:bg-secondary/90"
                >
                  Take a Campus Tour
                </a>
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold hover:bg-muted"
                >
                  View Courses
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Amity Patna campus ${i + 1}`}
                  className={
                    "h-44 w-full rounded-xl object-cover shadow-lg sm:h-56 lg:h-64 " +
                    (i % 3 === 0 ? "sm:col-span-2" : "")
                  }
                  loading="lazy"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-1">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight">
                  About Our Campus
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-2 text-muted-foreground">
                  Modern infrastructure | Experienced faculty | Industry-aligned
                  curriculum
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-2 text-muted-foreground leading-relaxed">
              <Reveal>
                <p>
                  Amity University Patna offers a vibrant academic ecosystem
                  with cutting-edge labs, an extensive library, comfortable
                  hostels, and dedicated spaces for sports and cultural
                  activities. Our programs are designed to nurture leadership,
                  research aptitude, and real-world skills.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4">
                  We emphasize interdisciplinary learning, global exposure, and
                  holistic development. Join a community that inspires
                  innovation and shapes leaders of tomorrow.
                </p>
              </Reveal>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses preview (UG & PG) */}
      <section id="courses" className="scroll-mt-20 py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight">
                Courses Offered
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/courses" className="text-sm font-semibold">
                See all programs →
              </Link>
            </Reveal>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-primary">
                Undergraduate
              </h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {ugCourses.map((c) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md"
                  >
                    <h4 className="font-semibold text-foreground">{c.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">
                Postgraduate
              </h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {pgCourses.map((c) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md"
                  >
                    <h4 className="font-semibold text-foreground">{c.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {c.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Tour - separate Images and Videos */}
      <section id="campus" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Campus Tour</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 text-muted-foreground">
              Explore our campus with curated images and videos highlighting key
              facilities and student life.
            </p>
          </Reveal>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-primary">Images</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {campusImages.map((m) => (
                <motion.figure
                  key={m.cat}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="group overflow-hidden rounded-xl border bg-card shadow-sm"
                >
                  <img
                    src={m.url}
                    alt={m.cat}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="p-3 text-sm text-muted-foreground">
                    {m.cat}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-primary">Videos</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {campusVideos.map((v) => (
                <Reveal key={v.url}>
                  <article className="overflow-hidden rounded-xl border shadow-sm">
                    <div className="aspect-video w-full">
                      <video
                        className="h-full w-full"
                        controls
                        preload="metadata"
                      >
                        <source src={v.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-3 text-sm text-muted-foreground">
                      {v.title}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section id="student-life" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Student Life</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 text-muted-foreground max-w-prose">
              Experience a vibrant campus life with diverse clubs, cultural
              fests, sports, hackathons, and community initiatives that shape
              well-rounded individuals.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Clubs & Societies",
                desc: "Tech, cultural, literary, photography and more",
                url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Sports & Fitness",
                desc: "Cricket, football, basketball, gym & yoga",
                url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Cultural Fests",
                desc: "Annual festivals, concerts, and showcases",
                url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Hostel Life",
                desc: "Comfortable living with great community",
                url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2dba?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl border bg-card shadow-sm"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-20 py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Events</h2>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-primary">Upcoming</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {events.upcoming.map((e) => (
                  <EventCard
                    key={e.title}
                    title={e.title}
                    date={e.date}
                    media={e.media}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Past</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {events.past.map((e) => (
                  <EventCard
                    key={e.title}
                    title={e.title}
                    date={e.date}
                    media={e.media}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section id="admissions" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid items-center gap-6 overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/90 to-primary p-8 text-primary-foreground shadow-lg md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold">Admissions Open 2025</h2>
                <p className="mt-1 text-primary-foreground/90">
                  Scholarships available for meritorious students. Limited
                  seats!
                </p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="/admissions/apply"
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow hover:bg-secondary/90"
                >
                  Start Your Application
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
          </Reveal>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-3 text-sm">
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2"
              >
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
            </div>
            <Reveal direction="left" delay={0.05}>
              <div className="overflow-hidden rounded-xl border shadow-sm">
                <iframe
                  title="Amity University Patna Map"
                  src="https://www.google.com/maps?q=Amity%20University%20Patna&output=embed"
                  className="h-64 w-full md:h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              Student Resources
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "LMS Portal", href: "#" },
              { title: "Library Access", href: "#" },
              { title: "Exam Cell", href: "#" },
              { title: "Counseling & Support", href: "#" },
            ].map((r) => (
              <motion.a
                key={r.title}
                href={r.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="rounded-xl border p-5 shadow-sm hover:shadow-md"
              >
                <div className="font-semibold">{r.title}</div>
                <div className="text-xs mt-1 text-muted-foreground">
                  Secure login required
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function EventCard({
  title,
  date,
  media,
}: {
  title: string;
  date: string;
  media: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-xl border bg-card shadow-sm"
    >
      <img
        src={media}
        alt={title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </motion.article>
  );
}
