"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps {
  children: ReactNode;
  x?: number;       // horizontal start position
  y?: number;       // vertical start position
  delay?: number;   // delay in seconds
  duration?: number; // animation duration
}

export default function FadeInUp({
  children,
  x = 0,
  y = 60,
  delay = 0,
  duration = 0.8,
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}