'use client'

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  { text: "Excelente viaje! Muy buena onda Lucho y Enzo!", author: "Gabriel Dulsan" },
  { text: "Gracias, hermoso viaje!!!", author: "Ayluu Sanchez" },
  { text: "Todo fue hermoso y perfecto. Hasta el clima. Gracias por tanto!", author: "Azzara Rausch" },
  { text: "Que lindo viaje, muchas gracias por todo el acompanamiento.", author: "Diana Blazquez" },
  { text: "Super recomendable en confort y trato. Gracias!", author: "Silvia Saez" },
  { text: "Espectacular viaje, gracias por todo.", author: "Vicki Ama" },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="testimonial-card"
        >
          <p className="text-2xl text-orange-500 mb-3">&ldquo;</p>
          <p className="text-lg md:text-xl text-slate-700 italic">{testimonials[index].text}</p>
          <p className="mt-5 text-sm font-semibold tracking-wide uppercase text-slate-500">{testimonials[index].author}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.author}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-7 bg-slate-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Ver testimonio ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
