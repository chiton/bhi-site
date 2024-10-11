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
                    <li className="submenu">
                        <a href="/#services">SERVICIOS</a>
                        <ul className="submenu-items">
                            <li><a href="/bus">Pasajes de bus</a></li>
                        </ul>
                    </li>
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

                .submenu {
                    position: relative;
                }

                .submenu-items {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #2C3477;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    z-index: 1000; /* Ensure the submenu overlays other containers */
                }

                .submenu:hover .submenu-items {
                    display: block;
                }

                .submenu-items li {
                    padding: 8px 16px;
                }

                .submenu-items li a {
                    text-decoration: none;
                    color: white;
                }

                .submenu-items li a:hover {
                    background-color: #2C3477;
                }

                @media (max-width: 768px) {
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