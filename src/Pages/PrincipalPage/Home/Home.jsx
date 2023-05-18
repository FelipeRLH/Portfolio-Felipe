// REACT
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// COMPONENTS
import Navbar from '../../../Components/Home/Navbar'

// IMG
import fundo_img_home from '../../../Assets/Home/fundo_img_home.png'
import box_nuvem_home from '../../../Assets/Home/box_nuvem_home.png'
import box_code_home from '../../../Assets/Home/box_code_home.png'
import box_react_home from '../../../Assets/Home/box_react_home.png'
import avatar_home from '../../../Assets/Home/avatar_home.png'

// CSS
import styles from "./Home.module.css"


function Home() {
    // Move images 
    const avatarRef = useRef(null);
    const boxCodeRef = useRef(null);
    const boxNuvemRef = useRef(null);
    const boxReactRef = useRef(null);

    useEffect(() => {
        const avatar = avatarRef.current;
        const boxCode = boxCodeRef.current;
        const boxNuvem = boxNuvemRef.current;
        const boxReact = boxReactRef.current;


        const onMouseMove = (e) => {
            avatar.style.transform = `translate(${e.clientX / 30}px, ${e.clientY / 30}px) rotate(${18}deg)`;
            boxCode.style.transform = `translate(${e.clientX / -80}px, ${e.clientY / 80}px)`;
            boxNuvem.style.transform = `translate(${e.clientX / -60}px, ${e.clientY / -60}px)`;
            boxReact.style.transform = `translate(${e.clientX / 60}px, ${e.clientY / 60}px)`;
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    // Navigation btn home
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main id='home'>
            <Navbar />

            <div className={styles.ContainerHome}>
                <div className={styles.ContainerText}>
                    <p className={styles.Greetings}>Olá, eu sou <span>Felipe</span>.</p>
                    <h1>Desenvolvedor <br /> Front-end React Júnior</h1>
                    <p className={styles.Text}>
                        Desenvolvo utilizando HTML, CSS, JavaScript, React, entre
                        outras ferramentas. Além disso, possuo experiência na
                        criação de interfaces responsivas para diversos tamanhos
                        de tela.
                    </p>
                    <div className={styles.ContainerBtn} >
                        <button className={styles.Btn} onClick={() => handleScroll("contato")}>Falar comigo</button>
                        <div className={styles.BtnBackground}></div>
                    </div>

                    <div className={styles.ContainerIcons}>
                        <Link className={styles.Icon} to="https://www.instagram.com/felipe_alvezs_/" target="_blank">
                            <BsInstagram />
                        </Link>
                        <Link className={styles.Icon} to="https://www.linkedin.com/feed/" target="_blank">
                            <BsLinkedin />
                        </Link>
                        <Link className={styles.Icon} to="https://github.com/FelipeRLH" target="_blank">
                            <BsGithub />
                        </Link>
                    </div>
                </div>

                <div className={styles.ContainerImage}>
                    <img className={styles.ImageBack} src={fundo_img_home} alt="Imagem Home" />
                    <img ref={boxCodeRef} className={styles.ImageCode} src={box_code_home} alt="Imagem Home" />
                    <img ref={boxNuvemRef} className={styles.ImageCloud} src={box_nuvem_home} alt="Imagem Home" />
                    <img ref={boxReactRef} className={styles.ImageReact} src={box_react_home} alt="Imagem Home" />
                    <img ref={avatarRef} className={styles.Avatar} src={avatar_home} alt="Imagem Home" />
                </div>
            </div>
            <div className={styles.BackgroundHome}></div>
        </main>
    )
}

export default Home