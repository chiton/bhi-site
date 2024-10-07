import Image from "next/image";
import React from "react";
import logo from "public/logo.svg";
import TestimonialsCarousel from '../components/TestimonialsCarousel';

export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <Image
              src={logo}
              width={180}
              height={37}
              alt="BHI Viajes y Turismo" />
          </div>
          <h1 className="hero-title">
            Descubrí los colores de tu destino
          </h1>
          <h2 className="hero-subtitle">
            Tus vacaciones soñadas te esperan!
          </h2>
          <a href="#contact">Contactanos &raquo;</a>
        </div>
      </section>
      <section id="services" className="services-section">
        <h2 className="services-title">Nuestros servicios</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Reserva de vuelos</h3>
            <p>Encuentra las mejores ofertas en vuelos nacionales e internacionales.</p>
          </div>
          <div className="service-item">
            <h3>Reserva en hoteles</h3>
            <p>Accede a una amplia selección de hoteles en todo el mundo.</p>
          </div>
          <div className="service-item">
            <h3>Paquetes turísticos</h3>
            <p>Disfruta de paquetes turísticos diseñados a tu medida.</p>
          </div>
          <div className="service-item">
            <h3>Seguros para el viajero</h3>
            <p>Viaja con tranquilidad con nuestros seguros de viaje.</p>
          </div>
          <div className="service-item">
            <h3>Pasajes de bus</h3>
            <p>Compra tus pasajes de bus de manera rápida y sencilla.</p>
          </div>
          <div className="service-item">
            <h3>Alquiler de autos</h3>
            <p>Encuentra el auto perfecto para tu viaje.</p>
          </div>
          <div className="service-item">
            <h3>Cruceros</h3>
            <p>Explora el mundo a bordo de los mejores cruceros.</p>
          </div>
          <div className="service-item">
            <h3>Programas educativos</h3>
            <p>Participa en programas educativos locales.</p>
          </div>
          <div className="service-item">
            <h3>Asesoramiento personalizado</h3>
            <p>Recibe asesoramiento personalizado para planificar tu viaje.</p>
          </div>
          <div className="service-item">
            <h3>Y mucho más!</h3>
            <p>Descubre todos los servicios que tenemos para ofrecerte.</p>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <h2>Qué dijeron nuestros clientes</h2>
        <TestimonialsCarousel />
      </section>
      <section id="contact">
        <h2>Contactanos</h2>
        <div className="contact-details">
          <p><strong>Teléfono:</strong> +54 0291 - 4566070</p>
          <p><strong>Email:</strong> info@bhiviajes.com</p>
          <p><strong>Dirección:</strong> Caronti 127, Bahía Blanca, Argentina</p>
        </div>
      </section>
    </main>
  );
}
