// REACT
import { useEffect, useState } from 'react'

// IMG
import logo_portfolio from '../../Assets/Home/logo_portfolio.png'
import curriculo from '../../Assets/Home/CurriculoFelipe.pdf'

// CSS
import './Navbar.css'
import '../../App.css'

// COMPONENTS
import HamburgerMenu from './HamburguerMenu'


function Navbar() {
    // Set session color
    const [selectedId, setSelectedId] = useState("")
    const [positionScroll, setPositionScroll] = useState(0)

    // Navgation function
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    // Set session color
    useEffect(() => {
        function componentDidMount() {
            setPositionScroll(parseInt(window.scrollY / 100))
        }
        window.addEventListener('scroll', componentDidMount);

        return () => {
            window.removeEventListener('scroll', componentDidMount);
        };
    }, [])

    useEffect(() => {
        if (positionScroll >= 0) {
            setSelectedId("home")
        } if (positionScroll >= 6) {
            setSelectedId("sobre")
        } if (positionScroll >= 12) {
            setSelectedId("projetos")
        } if (positionScroll >= 32) {
            setSelectedId("contato")
        }
    }, [positionScroll]);

    return (
        <nav className='nav-container'>
            <div className='logo-nav-container' onClick={() => handleScroll("home")}>
                <div className='logo-nav-box'><img src={logo_portfolio} alt="Logo portfólio" width={28} /></div>
                Portfólio
            </div>

            <div className='links-nav-container'>
                <ul>
                    <li onClick={() => handleScroll("home")}>
                        <span className={selectedId === "home" ? 'selected' : ''}>Início</span>
                    </li>
                    <li onClick={() => handleScroll("sobre")}>
                        <span className={selectedId === "sobre" ? 'selected' : ''}>Sobre mim</span>
                    </li>
                    <li onClick={() => handleScroll("projetos")}>
                        <span className={selectedId === "projetos" ? 'selected' : ''}>Projetos</span>
                    </li>
                    <li onClick={() => handleScroll("contato")}>
                        <span className={selectedId === "contato" ? 'selected' : ''}>Contato</span>
                    </li>
                    <a href={curriculo} download><li>Download currículo</li></a>
                </ul>
                <div className='link-background'></div>
            </div>
            <HamburgerMenu />
        </nav>
    )
}

export default Navbar

