// REACT
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

// CSS
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.FooterContainer}>

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
            <p>feliperamalhoalves40@gmail.com | (61) 992571705</p>
            <p> © 2023 by Felipe Ramalho Alves | Made with React and Figma</p>
        </footer>
    )
}

export default Footer