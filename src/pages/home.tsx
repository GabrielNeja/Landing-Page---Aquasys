import React, { useEffect, useState } from 'react';
import Logo from "../assets/logo1.svg";
import Menu from "../assets/hamburguer.svg"
import Close from "../assets/close.svg" 
import Champion from "../assets/champion.svg"
import Button from "../components/button"
import "../styles/header.css";
import "../styles/index.css";
import "../styles/utility.css";
import "../styles/button.css"
import "../styles/hero.css";
import "../styles/solutions.css"


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between header">
                    <img src={Logo} alt="Logo Aquasys" width={220} height={150} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                {/* <div className="container flex"> */}
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a> 
                                        </li>
                                    </ul>
                                    
                                    <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                {/* </div> */}
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <div className="container content">
                    <h1>Gerencie seu navio e cargas com eficiência e facilidade!</h1>
                    <p>Com o Aquasys, você pode monitorar e otimizar o gerenciamento do seu navio e de suas cargas. 
                       Nossa plataforma oferece soluções práticas e inteligentes para garantir que tudo chegue ao porto com segurança e no prazo.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span><p>
                    Inovação é com a gente! A <strong> Aquasys </strong>
                    já conquistou diversos clientes, seja você mais um deles,
                    veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
            </section>

            <section className="even-columns">
                <div className="card">
                    <img src={Champion} alt="ícone campeão" width={64} height={64} />
                    <h3>
                        Solução Inovadora para Logística Marítima
                    </h3>
                    <p>
                        O Aquasys é uma solução premiada por sua inovação e eficiência no gerenciamento de navios e cargas.
                    </p>
                    <hr />
                </div>
                <div className="card">
                    <img src={Champion} alt="ícone campeão" width={64} height={64} />
                    <h3>
                        A Revolução no Controle de Cargas
                    </h3>
                    <p>
                    Nossa plataforma tem recebido elogios e prêmios em eventos de inovação logística portuária.
                    </p>
                    <hr />
                </div>
                <div className="card">
                    <img src={Champion} alt="ícone campeão" width={64} height={64} />
                    <h3>
                        Tecnologia de Ponta para Gerenciamento de Navios
                    </h3>
                    <p>
                        Com a tecnologia mais avançada, o Aquasys tem se destacado em várias iniciativas de inovação no setor portuário.
                    </p>
                    <hr />
                </div>
            </section>
   
           
        </>
        
    );
}