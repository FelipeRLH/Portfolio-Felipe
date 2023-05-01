// REACT
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// IMG
import img_escritorio from "../../Assets/About/img_escritorio.png"
import html_logo from "../../Assets/About/html_logo.png"
import css_logo from "../../Assets/About/css_logo.png"
import javascript_logo from "../../Assets/About/javascript_logo.png"
import react_logo from "../../Assets/About/react_logo.png"
import bootstrap_logo from "../../Assets/About/bootstrap_logo.png"
import figma_logo from "../../Assets/About/figma_logo.png"

// CSS
import "./About.css"

function About() {
  // VISIBILITY ON SCROLL
  const [visibilityLeft, setVisibilityLeft] = useState("hidden")
  const [visibilityRight, setVisibilityRight] = useState("hidden")

  // VISIBILITY ON SCROLL
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 300) {
        setVisibilityLeft("showLeft")
        setVisibilityRight("showRight")
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id='sobre'>
      <div className="container-about">
        <div className='container-img-text'>
          <div className="image-about">
            <img className={visibilityLeft} src={img_escritorio} alt="" />
          </div>

          <div className={`text-about ${visibilityRight}`}>
            <h2>Sobre mim</h2>
            <p>Olá, sou Felipe, desenvolvedor de software júnior, com foco em React.
              Sou ágil e consistente em aprender novas tecnologias e me adaptar a
              mudanças com resiliência. Tenho experiência com projetos pessoais em
              que pude criar diversas funcionalidades. Entre as habilidades que
              possuo, destaco a configuração de rotas utilizando o Router, integração
              com APIs, versionamento de código com Git, além de aplicar semântica
              para SEO.</p>
            <p>Tenho 20 anos, sou um ávido estudante e leitor. Me interesso
              por temas como Administração, Tecnologia, Psicologia e Economia. Sou
              fascinado pelo Desenvolvimento Pessoal e me considero otimista,
              disciplinado e planejador.</p>
            <p>Estou sempre em busca de novos desafios e
              oportunidades para desenvolver minhas habilidades como desenvolvedor.
              Se você procura um profissional comprometido, organizado e dedicado a
              oferecer soluções de alta qualidade, entre em contato comigo."</p>
            <div className='tecs-about'>
              <img src={html_logo} alt="" />
              <img src={css_logo} alt="" />
              <img src={javascript_logo} alt="" />
              <img src={react_logo} alt="" />
              <img src={bootstrap_logo} alt="" />
              <img src={figma_logo} alt="" />
            </div>
          </div>
        </div>
        <div className="btn-about">
          <Link to="/moreabout" onClick={() => window.scrollY(0)}>Mais sobre mim</Link>
        </div>
      </div>
    </div>
  )
}

export default About