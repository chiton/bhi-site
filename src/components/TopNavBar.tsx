'use client'

import Image from "next/image";
import face from "/public/icons8-facebook-30.png";
import inst from "/public/icons8-instagram-30.png";
import twit from "/public/icons8-x-30.png";
import Script from "next/script";

const TopBarNav = () => {
    return (
        <nav>
            <div className="nav-container">
                <button className="nav-toggle" aria-label="Toggle navigation">
                    ☰
                </button>
                <ul className="nav-items">
                    <li><a href="/#home">INICIO</a></li>
                    <li className="submenu"><a href="/#services">SERVICIOS</a></li>
                    <li><a href="/bus">PASAJES DE BUS</a></li>
                    <li><a href="https://bhiviajes.paquetedinamico.com/">ARMA TU VIAJE</a></li>
                    <li><a href="/#testimonials">TESTIMONIOS</a></li>
                    <li><a href="/#contact">CONTACTO</a></li>
                    <li><a href="https://www.facebook.com/BHIViajes?ref=ts">
                        <Image
                            src={face}
                            width={30}
                            height={30}
                            alt="Fecebook" />
                    </a></li>
                    <li><a href="https://www.instagram.com/bhiviajesbahia/?hl=es">
                        <Image
                            src={inst}
                            width={30}
                            height={30}
                            alt="Instagram" />
                    </a></li>
                    <li><a href="https://x.com/BHIVIAJES">
                        <Image
                            src={twit}
                            width={30}
                            height={30}
                            alt="X" />
                    </a></li>
                </ul>

                <style jsx>{`
                .nav-container {
                    justify-content: center;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    font-weight: bold;
                }

                .nav-toggle {
                    margin-left: 10px;
                    display: none;
                    font-size: 24px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .nav-items {
                    gap: 2rem;
                    display: flex;
                    flex-direction: row;
                    list-style: none;
                    padding: 0;
                    align-items: center;
                }

                @media (max-width: 1024px) {
                    .nav-container {
                        justify-content: start;
                    }

                    .nav-toggle {
                        display: block;
                    }

                    .nav-items {
                        display: none;
                        flex-direction: column;
                        width: 100%;
                        margin-left: 10px;
                    }

                    .nav-items li {
                        text-align: center;
                    }

                    .nav-items.show {
                        display: flex;
                    }
                }
            `}</style>
            </div>
            <Script id="toggle-script">
                {`
                const navToggle = document.querySelector('.nav-toggle');
                const navItems = document.querySelector('.nav-items');

                navToggle.addEventListener('click', () => {
                navItems.classList.toggle('show');
                });
                `}
            </Script>
        </nav>
    );
};

export default TopBarNav;