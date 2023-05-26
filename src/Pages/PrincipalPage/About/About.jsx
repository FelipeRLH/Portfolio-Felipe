// REACT
import { useState } from "react"
import { Link } from "react-router-dom"
import { BsFillCameraReelsFill, BsLayoutTextSidebarReverse } from 'react-icons/bs';

// IMG
import img_escritorio from "../../../Assets/About/About/img_escritorio.png"
import html_logo from "../../../Assets/About/About/html_logo.png"
import css_logo from "../../../Assets/About/About/css_logo.png"
import javascript_logo from "../../../Assets/About/About/javascript_logo.png"
import react_logo from "../../../Assets/About/About/react_logo.png"
import bootstrap_logo from "../../../Assets/About/About/bootstrap_logo.png"
import figma_logo from "../../../Assets/About/About/figma_logo.png"

import VideoAbout from "../../../Assets/About/About/VideoAbout.mp4"

// COMPONENTS
import AnimatedIcons from "./AnimatedIcons"

// CSS
import "./AboutAnimated.css"
import styles from "./About.module.css"
import { Button1 } from "../../../Components/StyledComponents/Button1.style";


function About() {
  // BTN
  const [stateBTN, setStateBTN] = useState({
    moveBtn: 60,
    colorLeft: "White",
    colorRight: "Black",
    animationMove: "Text-in",
    opacityLeft: "opacity-out",
    opacityRight: "opacity-in"
  })

  function moveLeft() {
    setStateBTN({
      moveBtn: -1,
      colorLeft: "Black",
      colorRight: "",
      animationMove: "Video-in",
      opacityLeft: "opacity-in",
      opacityRight: "opacity-out"
    })
  }
  function moveRight() {
    setStateBTN({
      moveBtn: 60,
      colorLeft: "",
      colorRight: "Black",
      animationMove: "Text-in",
      opacityLeft: "opacity-out",
      opacityRight: "opacity-in"
    })
  }

  const { moveBtn, colorLeft, colorRight, animationMove, opacityLeft, opacityRight } = stateBTN
  return (
    <div id="sobre">
      <div className={styles.ContainerAbout}>

        <div className={styles.BtnToggle}>
          <BsFillCameraReelsFill onClick={moveLeft} className={styles.IconToggle} style={{ color: `${colorLeft}` }} />
          <BsLayoutTextSidebarReverse onClick={moveRight} className={styles.IconToggle} style={{ color: `${colorRight}` }} />
          <div style={{ left: `${moveBtn}px` }}></div>
        </div>

        <div className={styles.ContainerContent} style={{ animation: `${animationMove} .8s ease-in-out forwards` }}>
          <div className={styles.VideoContent} style={{ animation: `${opacityLeft} .8s forwards` }}>
            <video src={VideoAbout} type="video/mp4" controls></video>
          </div>

          <div className={styles.TextContent} style={{ animation: `${opacityRight} 1s forwards` }}>
            <h2>Sobre mim</h2>
            <p>Olá, sou Felipe, desenvolvedor de software júnior, com foco em React.
              Sou ágil e consistente em aprender novas tecnologias e me adaptar a
              mudanças com resiliência. Tenho experiência com projetos pessoais em
              que pude criar diversas funcionalidades. Entre as habilidades que
              possuo, destaco o React-Router, APIs(Axios e useQuery), Git, Styled-components,
              CSS Modules, Responsivo, Componentização, Flexbox, SEO e etc.</p>
            <p>Tenho 20 anos, sou um ávido estudante e leitor. Me interesso
              por temas como Administração, Tecnologia, Psicologia e Economia. Sou
              fascinado pelo Desenvolvimento Pessoal e me considero otimista,
              disciplinado e planejador.</p>
            <p>Estou sempre em busca de novos desafios e
              oportunidades para desenvolver minhas habilidades como desenvolvedor.
              Se você procura um profissional comprometido, organizado e dedicado a
              oferecer soluções de alta qualidade, entre em contato comigo.</p>
            <div className={styles.TecsContent}>
              <img src={html_logo} alt="" />
              <img src={css_logo} alt="" />
              <img src={javascript_logo} alt="" />
              <img src={react_logo} alt="" />
              <img src={bootstrap_logo} alt="" />
              <img src={figma_logo} alt="" />
            </div>
          </div>
        </div>

        <Button1><Link to="/moreabout" onClick={() => window.scrollY(0)}>Mais sobre mim</Link></Button1>

        <AnimatedIcons moveBtn={moveBtn} />
      </div>
    </div>
  )
}

export default About;