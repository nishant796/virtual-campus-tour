import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type MediaItem = { cat: string; url: string; title?: string };

const imageItems: MediaItem[] = [
  { cat: "Classrooms", url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Library", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Labs", url: "https://images.unsplash.com/photo-1551281044-8a5d2f6df31a?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Hostels", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2dba?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Sports", url: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Culture", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Classrooms", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop" },
  { cat: "Labs", url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1400&auto=format&fit=crop" },
];

const videoItems: MediaItem[] = [
  { cat: "Walkthrough", url: "https://media.w3.org/2010/05/sintel/trailer.mp4", title: "Campus Walkthrough" },
  { cat: "Student Life", url: "https://media.w3.org/2010/05/bunny/trailer.mp4", title: "Student Life Highlights" },
  { cat: "Facilities", url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", title: "Sports Complex" },
  { cat: "Facilities", url: "https://media.w3.org/2010/05/video/movie_300.mp4", title: "Library & Labs" },
];

const imageCategories = ["All", ...Array.from(new Set(imageItems.map((i) => i.cat)))];

export default function CampusTour() {
  const [tab, setTab] = useState<"images" | "videos">("images");
  const [cat, setCat] = useState("All");

  const filteredImages = useMemo(() => {
    return cat === "All" ? imageItems : imageItems.filter((i) => i.cat === cat);
  }, [cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight">Virtual Campus Tour</h1>
        <p className="mt-2 text-muted-foreground max-w-prose">
          Explore Amity University Patna through curated galleries of images and videos across classrooms, labs, library, hostels, sports and cultural spaces.
        </p>
      </motion.header>

      <div className="mt-6 inline-flex rounded-lg border bg-card p-1 text-sm">
        <button
          onClick={() => setTab("images")}
          className={`rounded-md px-4 py-2 transition-colors ${tab === "images" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
        >
          Images
        </button>
        <button
          onClick={() => setTab("videos")}
          className={`rounded-md px-4 py-2 transition-colors ${tab === "videos" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
        >
          Videos
        </button>
      </div>

      {tab === "images" && (
        <section className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            {imageCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs sm:text-sm ${
                  cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((m, idx) => (
              <motion.figure
                key={`${m.url}-${idx}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm"
              >
                <img
                  src={m.url}
                  alt={`${m.cat} ${idx + 1}`}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="p-3 text-sm text-muted-foreground">
                  {m.cat}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      )}

      {tab === "videos" && (
        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          {videoItems.map((v) => (
            <motion.article
              key={v.url}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-xl border shadow-sm"
            >
              <div className="aspect-video w-full">
                <video className="h-full w-full" controls preload="metadata">
                  <source src={v.url} type="video/mp4" />
                </video>
              </div>
              <div className="p-3 text-sm text-muted-foreground">{v.title || "Campus Video"}</div>
            </motion.article>
          ))}
        </section>
      )}
    </div>
  );
}
