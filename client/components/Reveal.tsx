import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const offset = 24;
  const hidden =
    direction === "up"
      ? { opacity: 0, y: offset }
      : direction === "down"
      ? { opacity: 0, y: -offset }
      : direction === "left"
      ? { opacity: 0, x: offset }
      : { opacity: 0, x: -offset };

  return (
    <motion.div
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
