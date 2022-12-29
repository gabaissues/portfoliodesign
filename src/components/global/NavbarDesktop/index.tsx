import React from 'react';

const NavbarDesktopComponent = () => {
    return (
        <nav data-aos="fade-down" className="justify-between flex-row items-center hidden lg:flex">

            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7501 44.25C20.1809 44.25 24.5834 39.8475 24.5834 34.4167C24.5834 28.9859 20.1809 24.5834 14.7501 24.5834C9.31928 24.5834 4.91675 28.9859 4.91675 34.4167C4.91675 39.8475 9.31928 44.25 14.7501 44.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44.2501 44.25C49.6809 44.25 54.0834 39.8475 54.0834 34.4167C54.0834 28.9859 49.6809 24.5834 44.2501 24.5834C38.8193 24.5834 34.4167 28.9859 34.4167 34.4167C34.4167 39.8475 38.8193 44.25 44.2501 44.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.5834 34.4167L25.1021 34.1561C26.4676 33.4733 27.9734 33.1178 29.5001 33.1178C31.0268 33.1178 32.5325 33.4733 33.898 34.1561L34.4167 34.4167M46.7084 14.75L53.6852 31.0315C53.9478 31.6436 54.0832 32.3027 54.0834 32.9687V34.4167M12.2917 14.75L5.315 31.0315C5.05274 31.6429 4.91725 32.301 4.91675 32.9662V34.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <ul className="flex flex-row gap-5">

                        <li className="flex flex-row items-center">

                            <a href="#" className="decoration-none flex flex-wrap">
                                
                                Início
                                
                            </a>

                        </li>
                        <li className="flex flex-row items-center ">
                            <a href="#about" className="decoration-none flex flex-wrap">
                              
                                Sobre

                            </a>

                        </li>
                        <li className="flex flex-row items-center">

                            <a href="#projects" className="decoration-none flex flex-wrap">

                                Projetos

                            </a>

                        </li>
                        <li className="flex flex-row items-center">

                            <a href="#contact" className="decoration-none flex flex-wrap">

                                Contato

                            </a>

                        </li>
                    </ul>

        </nav>
    )
}

export default NavbarDesktopComponent;