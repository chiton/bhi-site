'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const TestimonialsCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <blockquote>
                    <p>&quot;BHI Viajes hizo nuestra luna de miel inolvidable!&quot; - Jane Doe</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Excelente servicio y buenos precios!&quot; - John Smith</p>
                </blockquote>
            </div>
            <div>
                <blockquote>
                    <p>&quot;Un viaje perfecto gracias a BHI Viajes!&quot; - Maria Lopez</p>
                </blockquote>
            </div>
        </Carousel>
    );
};

export default TestimonialsCarousel;