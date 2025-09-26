// components/Hero.tsx
"use client";
import { motion
 } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6 }}
      className="text-center py-20 space-y-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        AI Engineering with Precision & Clarity
      </h1>
      <p className="text-muted text-lg max-w-xl mx-auto">
        Resilient systems, clean design, and employer-facing value — built by Scott.
      </p>
      <a href="#projects" className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-blue-400 transition">
        View Projects
      </a>
    </motion.section>
  )
}

