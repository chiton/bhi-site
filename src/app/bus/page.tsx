import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://bhiviajes.tur.ar/bus",
    },
};

export default function Bus() {
    return (
        <main>
            <iframe src="https://ecommerce.centraldepasajes.com.ar/agenciaframe.aspx?Token=XTDk8hWGsLmjKwgHAfoLtaSUIDq8yHA8&age=cag" className="w-full h-dvh"></iframe>
        </main>
    );
}
