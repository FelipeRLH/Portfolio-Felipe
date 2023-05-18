import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.FooterContainer}>
            <div className={styles.LinksFooter}>
                <a href='https://www.linkedin.com/in/felipe-ramalho-/' target='_blanck'>Linkedin</a>
                <a href='https://www.instagram.com/felipe_alvezs_/' target='_blanck'>Instagram</a>
                <a href='https://github.com/FelipeRLH' target='_blanck'>Github</a>
            </div>
            <p> © 2023 by Felipe Ramalho Alves | Made with React and Figma</p>
        </footer>
    )
}

export default Footer