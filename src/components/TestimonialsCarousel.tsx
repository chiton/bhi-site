'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const TestimonialsCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <blockquote>
                    <p>&quot;Excelente viaje! Muy buena onda Lucho y Enzo! 👌&quot; - Gabriel Dulsan</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Gracias, hermoso viaje!!!&quot; - Ayluu Sanchez</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Todo fue hermoso y perfecto. Hasta el clima. Gracias por tanto!&quot; - Azzara Rausch</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Que lindo!!!! Hermoso viaje !! Muchas gracias Lucho y Nico👏&quot; - Diana Blazquez</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Hermoso viaje....gracias&quot; - Mirta Bonjour</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Super recomendable 👍👍👍&quot; - Noel Vera</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Excelente viaje, super recomendable en cuanto al confort del Bus, trato, ubicación en el estadio, el cuidado y seguridad de los pasajeros. Gracias!&quot; - Silvia Saez</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Grande lucho, más q recomendable el viaje con ustedes, abrazo grande&quot; - Cristian Antonio Sandalich</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;🙌👏gracias! Excelente!&quot; - Maria Laura Plasencia</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Espectacular viaje 😚 muchas gracias por todo!!&quot; - Vicki Ama</p>
                </blockquote>
            </div>
        </Carousel>
    );
};

export default TestimonialsCarousel;