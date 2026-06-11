'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "/public/logo.svg";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const services = [
  {
    title: "Vuelos y hoteles",
    description: "Combinaciones flexibles para escapadas cortas o vacaciones largas.",
    href: "https://bhiviajes.e-agencias.com/vuelos",
    icon: "✈️",
  },
  {
    title: "Paquetes a medida",
    description: "Diseñamos el viaje con ritmo, presupuesto y estilo personal.",
    href: "https://bhiviajes.e-agencias.com/",
    icon: "🧳",
  },
  {
    title: "Pasajes de bus",
    description: "Reservá tu asiento de forma simple y rápida desde la web.",
    href: "/bus",
    icon: "🚌",
  },
  {
    title: "Alquiler temporario",
    description: "Departamentos equipados para estadías cortas, viajes de trabajo o escapadas.",
    href: "/apartments",
    icon: "🏠",
  },
  // {
  //   title: "Asesoría completa",
  //   description: "Te acompañamos antes, durante y después del viaje.",
  //   href: "#contact",
  //   icon: "🤝",
  // },
];

const highlights = [
  {
    title: "Reserva flexible",
    description: "Cambios y ajustes simples según disponibilidad.",
    icon: "🧭",
  },
  {
    title: "Atención personalizada",
    description: "Un asesor real que entiende tu estilo de viaje.",
    icon: "🤝",
  },
  {
    title: "Soporte durante tu viaje",
    description: "Te acompañamos antes, durante y después.",
    icon: "💬",
  },
  {
    title: "Pago seguro",
    description: "Operaciones protegidas y confirmaciones claras.",
    icon: "🔒",
  },
];

const destinations = ["Brasil", "Caribe", "Patagonia", "Europa"];

export default function Home() {
  return (
    <main>
      <section className="border-b border-sky-100 bg-sky-50 text-sm text-slate-700">
        <div className="container-custom px-4 py-2 flex items-center justify-center gap-3 text-center">
          <span>Ofertas de temporada activas</span>
          <a href="https://bhiviajes.e-agencias.com/" className="font-semibold text-sky-700 underline underline-offset-2">
            Ver promociones
          </a>
        </div>
      </section>

      <section id="home" className="hero">
        <div className="container-custom relative z-10 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl rounded-[2rem] glass-effect p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <Image
                src={logo}
                width={210}
                height={44}
                alt="BHI Viajes y Turismo"
                className="w-[160px] md:w-[190px] md:shrink-0"
              />

              <h1 className="text-4xl md:text-5xl leading-tight text-white hero-readable">
                Viajes pensados para vivirlos con calma, estilo y buen asesoramiento.
              </h1>
            </div>

            <p className="mt-6 text-lg text-white/95 max-w-2xl hero-readable">
              En BHI combinamos destinos, experiencias y atención humana para crear vacaciones memorables.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="https://bhiviajes.e-agencias.com/" className="btn-primary text-base">
                Empezar mi viaje
              </a>
              <a href="#contact" className="btn-secondary text-base">
                Hablar con un asesor
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {destinations.map((destination) => (
                <span
                  key={destination}
                  className="rounded-full border border-white/70 bg-slate-900/45 px-3 py-1 text-sm font-medium text-white shadow-sm"
                >
                  {destination}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container-custom px-4 py-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-xs tracking-[0.2em] uppercase text-slate-500">Por qué elegirnos</p>
            <h2 className="mt-2 text-3xl md:text-4xl text-slate-900">Cuidamos cada detalle de tu viaje</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-2xl" aria-hidden="true">{item.icon}</p>
                <h3 className="mt-3 text-lg text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl text-slate-900">Diseñamos tu próxima experiencia</h2>
            <p className="mt-4 text-slate-600">
              Armamos propuestas claras y personalizadas para que tu viaje tenga todo lo que buscás.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="service-card"
              >
                <p className="text-3xl">{service.icon}</p>
                <h3 className="mt-4 text-xl text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-6">{service.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="container-custom relative z-10 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-slate-900">Historias de viajeros felices</h2>
            <p className="mt-4 text-slate-600">
              Comentarios reales de personas que confiaron sus vacaciones a nuestro equipo.
            </p>
          </div>
          <div className="mt-9">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl text-slate-900">Hablemos de tu viaje</h2>
            <p className="mt-4 text-slate-600">Te respondemos rápido y te proponemos opciones concretas según lo que necesitás.</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <p className="text-2xl">📞</p>
              <h3 className="mt-3 text-xl text-slate-900">Teléfono</h3>
              <p className="mt-1 text-slate-600">+54 291 5037575</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <p className="text-2xl">✉️</p>
              <h3 className="mt-3 text-xl text-slate-900">Email</h3>
              <p className="mt-1 text-slate-600">info@bhiviajes.com.ar</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <p className="text-2xl">📍</p>
              <h3 className="mt-3 text-xl text-slate-900">Dirección</h3>
              <a
                href="https://maps.app.goo.gl/o3SqgLsoBUeKeqH88"
                className="mt-1 inline-block text-sky-700 underline underline-offset-2 hover:text-sky-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Caronti 127, Bahía Blanca
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="https://wa.me/542915037575" className="btn-primary">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-custom px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl text-slate-900">BHI Viajes</h3>
              <p className="mt-3 text-sm text-slate-600">Planificamos viajes con cercanía y experiencia para que disfrutes cada etapa.</p>
            </div>
            <div>
              <h4 className="text-lg text-slate-900">Navegación</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="/#services" className="footer-link">Servicios</a></li>
                <li><a href="/bus" className="footer-link">Pasajes de bus</a></li>
                <li><a href="/#contact" className="footer-link">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-slate-900">Contacto</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>+54 291 5037575</li>
                <li>info@bhiviajes.com.ar</li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/o3SqgLsoBUeKeqH88"
                    className="footer-link underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Caronti 127, Bahía Blanca
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg text-slate-900">Seguinos</h4>
              <div className="mt-3 flex gap-2">
                <a href="https://www.facebook.com/BHIViajes?ref=ts" className="rounded-lg bg-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-300">Facebook</a>
                <a href="https://www.instagram.com/bhiviajesbahia/?hl=es" className="rounded-lg bg-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-300">Instagram</a>
                <a href="https://x.com/BHIVIAJES" className="rounded-lg bg-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-300">X</a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-300 pt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} BHI Viajes y Turismo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
