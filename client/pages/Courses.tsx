import { motion } from "framer-motion";

const programs = [
  {
    category: "Undergraduate",
    items: [
      { name: "B.Tech (Computer Science & Engineering)", details: "Specializations: AI/ML, Data Science, Cybersecurity, IoT" },
      { name: "BBA", details: "Tracks: Marketing, Finance, Business Analytics, HR" },
      { name: "BCA", details: "Focus: Full-Stack Development, Cloud, DevOps" },
      { name: "BA (H) Psychology", details: "Counseling, Research Methods, Organizational Behavior" },
      { name: "B.Com (H)", details: "Accounting, Taxation, Financial Management" },
    ],
  },
  {
    category: "Postgraduate",
    items: [
      { name: "MBA", details: "Concentrations: Strategy, Entrepreneurship, Analytics" },
      { name: "MCA", details: "Advanced Software Engineering, Cloud & Security" },
    ],
  },
  {
    category: "Diploma & Certificate",
    items: [
      { name: "Data Analytics", details: "Python, Visualization, Machine Learning" },
      { name: "Digital Marketing", details: "SEO/SEM, Performance Marketing, Analytics" },
      { name: "Cloud Computing", details: "AWS/Azure Fundamentals, DevOps" },
    ],
  },
];

export default function Courses() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <motion.header initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Courses Offered</h1>
        <p className="mt-3 text-muted-foreground">
          Explore comprehensive programs designed with industry inputs, hands-on learning, internships, and career support. Each program focuses on building strong fundamentals and future-ready skills.
        </p>
      </motion.header>

      <div className="mt-10 grid gap-8">
        {programs.map((group, gi) => (
          <motion.section
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: gi * 0.05 }}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-primary">{group.category}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {group.items.map((p) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border p-4 hover:shadow-md"
                >
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.details}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        id="admissions-cta"
        className="mt-12 overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary to-secondary/80 p-6 text-secondary-foreground shadow"
      >
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold">Need help choosing a program?</div>
            <p className="text-sm opacity-90">Talk to our admissions counselor to find the right fit for you.</p>
          </div>
          <a href="mailto:admissions.patna@amity.edu" className="inline-flex items-center justify-center rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground shadow hover:bg-background/90">
            Contact Admissions
          </a>
        </div>
      </motion.div>
    </div>
  );
}
