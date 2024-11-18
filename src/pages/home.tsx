import React, { useEffect, useState } from 'react';
import Logo from "../assets/logo1.svg";
import Menu from "../assets/hamburguer.svg"
import Close from "../assets/close.svg" 
import Champion from "../assets/champion.svg"
import ProfileImageOne from  "../assets/images/profileImageOne.png"
import ProfileImageTwo from "../assets/images/profileImageTwo.png"
import Star from "../assets/images/star.png"
import Check from "../assets/images/check.png"
import Button from "../components/button"
import "../styles/header.css";
import "../styles/index.css";
import "../styles/utility.css";
import "../styles/button.css"
import "../styles/hero.css";
import "../styles/solutions.css"
import "../styles/testimonials.css"
import "../styles/pricing.css"
import "../styles/contact.css"
import "../styles/footer.css"
import { sendEmail } from '../utils/sendEmail';


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
                            <a className="reverse-color ml-lg" href="">LOGIN</a>
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
                                            <a className="reverse-color" href="#">LOGIN</a> 
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

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                    Quem já utiliza o Aquasys conhece a eficiência e a inovação que ele entrega. Estamos desafiando a ideia de que sistemas de gestão portuária precisam ser complicados e ineficazes. 
                    Confira abaixo os depoimentos de quem já adotou o Aquasys e aprovou!
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                O Aquasys transformou completamente a maneira como gerenciamos nossos navios e cargas. 
                                Antes, enfrentávamos muitos atrasos e problemas na comunicação entre equipes, mas agora, tudo é feito de forma integrada e eficiente.
                                </p>
                            </span> 
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>  
                            <span className="names">
                                <p>Ellon Ma</p>
                                <p>GERENTE DE OPERAÇÕES PORTUÁRIAS</p>
                            </span> 
                        </div>
                    </div>

                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageTwo} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                A automação de processos do Aquasys trouxe uma economia significativa de tempo e recursos para nossa operação. 
                                O sistema é intuitivo, confiável e a segurança dos dados é impressionante.
                                </p>
                            </span> 
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>  
                            <span className="names">
                                <p>Ryan Gosling</p>
                                <p>DIRETOR DE LOGÍSTICA PORTUÁRIA</p>
                            </span> 
                        </div>
                    </div>

                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                O fato de o sistema ser tão bem projetado, com funcionalidades específicas para o nosso setor, 
                                faz toda a diferença. Recomendo sem dúvidas!
                                </p>
                            </span> 
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>  
                            <span className="names">
                                <p>RICHARD MILLE</p>
                                <p>ANALISTA DE GESTÃO DE CARGAS</p>
                            </span> 
                        </div>
                    </div>
                </section>    
            </section> 

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Ideal para pequenas empresas portuárias.</p>
                        </span>
                        <span className="price">
                            <h2>Grátis</h2> 
                        </span>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Gestão simplificada de cargas.</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Monitoramento básico de navios.</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
	                    <span className="bonus">
		                    <p>1º MÊS COM DESCONTO</p>
	                    </span>
	                    <span className="plan">
                            <h3>Premium</h3>
                            <p>Perfeito para empresas de grande porte</p>
                        </span>
                        <span className="price">
                            <h2>R$ 499,90 </h2> 
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Monitoramento em tempo real e automação avançada.</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Relatórios personalizados.</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Suporte completo.</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Empresarial</h3>
                            <p>Perfeito para empresas de médio porte.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 199,90 </h2> 
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Gestão completa de cargas.</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Automação de processos portuários.</p>
                        </span>
                    </div>
                </section>
            </section>

                <section id="contact" className="container">
                    <header>
                        <p className="highlight">Envie sua dúvida</p>
                        <h2>Entre em contato</h2>
                        <p className="description">
                            Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😎
                        </p>
                    </header>
                    <form
                        className="contact-form"
                        onSubmit={async (e) => {
                        e.preventDefault();

                        const form = e.target as HTMLFormElement;
                        const email = form.email.value;
                        const content = form.content.value;

                        try {
                            // Chama a função sendEmail
                            await sendEmail(email, content);

                            alert('E-mail enviado com sucesso!');
                        } catch (err) {
                            console.error('Erro ao enviar o e-mail:', err);
                            alert('Erro ao enviar o e-mail. Tente novamente.');
                        }
                        }}
                        >
                        <input
                        type="email"
                        name="email"
                        placeholder="Seu melhor Email"
                        required
                        aria-label="Seu melhor Email"
                        />
                        <textarea
                        name="content"
                        placeholder="Motivo do contato. Ex: Gostei muito do produto Aqusys, poderia me enviar um orçamento?"
                        rows={4}
                        required
                        aria-label="Motivo do contato"
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3><img src={Logo} alt="Logo Aquasys" width={200} height={150} /></h3>
                    </div>
                    <div className="footer-links">
                        <div>
                            <ul>
                                <li><a href="#">EMPRESA</a></li>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">FUNCIONALIDADES</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">RECURSOS</a></li>
                                <li><a href="#">IOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        Feito com amor na aula de Programação Web 💙 ©2024 Aquasys - Todos os direitos reservados.
                    </p>
                </div>
            </footer>          
        </>
    );
}