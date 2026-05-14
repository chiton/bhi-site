'use client'

import { useState } from "react";
import Image from "next/image";
import face from "/public/icons8-facebook-30.png";
import inst from "/public/icons8-instagram-30.png";
import twit from "/public/x-social-media-round-icon.png";

const links = [
  { href: "/#home", label: "Inicio" },
  { href: "/#services", label: "Servicios" },
  { href: "/bus", label: "Bus" },
  { href: "/apartments", label: "Alquiler Temporario" },
  { href: "https://app.bhiviajes.com.ar/home/dashboard", label: "Viajes" },
  { href: "/#testimonials", label: "Opiniones" },
  { href: "/#contact", label: "Contacto" },
];

const socials = [
  { href: "https://www.facebook.com/BHIViajes?ref=ts", src: face, alt: "Facebook" },
  { href: "https://www.instagram.com/bhiviajesbahia/?hl=es", src: inst, alt: "Instagram" },
  { href: "https://x.com/BHIVIAJES", src: twit, alt: "X" },
];

export default function TopBarNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container-custom px-4">
        <div className="h-16 flex items-center justify-between gap-4">
          <a href="/#home" className="text-lg md:text-xl font-bold text-slate-800 tracking-[0.08em] uppercase">
            BHI VIAJES
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-slate-100 transition"
              >
                <Image src={social.src} width={20} height={20} alt={social.alt} />
              </a>
            ))}
            <a
              href="https://bhiviajes.e-agencias.com/"
              className="ml-1 rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
            >
              Arma tu viaje
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-slate-100"
                  >
                    <Image src={social.src} width={20} height={20} alt={social.alt} />
                  </a>
                ))}
              </div>
              <a
                href="https://bhiviajes.e-agencias.com/"
                className="rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-600"
              >
                Arma tu viaje
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
