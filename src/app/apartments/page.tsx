import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Departamentos temporarios | BHI Viajes y Turismo",
  description:
    "Departamentos para alquiler temporario con ubicaciones prácticas y asesoramiento de BHI Viajes y Turismo.",
};

type Apartment = {
  name: string;
  location: string;
  image: string;
  price: string;
  capacity: string;
  rooms: string;
  description: string;
  amenities: string[];
};

const apartments: Apartment[] = [
  {
    name: "Tandil Parque Independencia",
    location: "Tandil, zona Avdas. Rivadavia y Avellaneda",
    image: "/depto-tandil.jpg",
    price: "Consultar tarifa",
    capacity: "Hasta 3 huéspedes",
    rooms: "1 dormitorio",
    description:
      "Una opción cómoda para estadías cortas, cerca de comercios, cafeterías y puntos principales de la ciudad.",
    amenities: ["Wi-Fi", "Cocina equipada", "Aire acondicionado", "Ropa blanca", "Cochera", "Smart TV", "Cafetera", "Microondas", "Losa Radiante", "Piscina"],
  },
  // {
  //   name: "Dúplex Parque",
  //   location: "Barrio Universitario",
  //   image: "/hero-image-4.jpg",
  //   price: "Consultar tarifa",
  //   capacity: "Hasta 5 huéspedes",
  //   rooms: "2 dormitorios",
  //   description:
  //     "Espacios amplios para familias o viajes de trabajo, con buena conexión a avenidas y zonas verdes.",
  //   amenities: ["Cochera", "Patio", "Lavadero"],
  // },
  // {
  //   name: "Studio Ejecutivo",
  //   location: "Macrocentro",
  //   image: "/hero-image-5.jpg",
  //   price: "Consultar tarifa",
  //   capacity: "Hasta 2 huéspedes",
  //   rooms: "Ambiente único",
  //   description:
  //     "Un espacio simple y funcional para gestiones, eventos o escapadas breves con todo lo necesario a mano.",
  //   amenities: ["Smart TV", "Escritorio", "Ropa blanca"],
  // },
];

export default function Apartments() {
  return (
    <main className="bg-white pt-16 text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-custom grid gap-8 px-4 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Alquiler temporario
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
              Departamentos listos para tu próxima estadía
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Encontrá alojamientos prácticos y bien ubicados para viajar por
              placer, trabajo o una escapada de pocos días.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#disponibles" className="btn-primary">
                Ver opciones
              </a>
              <a
                href="https://wa.me/542915037575"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/alq-temp-3.webp"
              width={900}
              height={600}
              alt="Alojamiento temporario en un destino de viaje"
              className="h-full min-h-[280px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="disponibles" className="container-custom px-4 py-14 lg:py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Opciones destacadas
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Elegí tu base para la estadía
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Las tarifas y fechas se confirman según temporada, cantidad de noches
            y disponibilidad de cada propiedad.
          </p>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {apartments.map((apartment) => (
            <article
              key={apartment.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={apartment.image}
                width={700}
                height={460}
                alt={`Imagen de ${apartment.name}`}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl">{apartment.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{apartment.location}</p>
                <p className="mt-3 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                  {apartment.price}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {apartment.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="rounded-lg bg-slate-100 px-3 py-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Capacidad
                    </dt>
                    <dd className="mt-1">{apartment.capacity}</dd>
                  </div>
                  <div className="rounded-lg bg-slate-100 px-3 py-2">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Ambientes
                    </dt>
                    <dd className="mt-1">{apartment.rooms}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {apartment.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
