// REACT
import { useState, useEffect } from 'react';

// CSS
import "./Hamburguermenu.css"

// IMG
import curriculo from '../../Assets/Home/CurriculoFelipe.pdf'

function HamburgerMenu() {
    // Toggle menu
    const [isOpen, setIsOpen] = useState(false);
    // Set session color
    const [selectedId, setSelectedId] = useState("")
    const [positionScroll, setPositionScroll] = useState(0)

    // Navigation function
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView();
        setIsOpen(false)
    };

    // Toggle menu
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

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
        } if (positionScroll >= 50) {
            setSelectedId("contato")
        }
    }, [positionScroll]);

    return (
        <div className='hamburguermenu-container'>
            <div onClick={handleMenuClick}>
                <div className={`animationMenu ${isOpen ? "openIcon" : ""}`}>
                    <div></div>
                </div>
            </div>

            <div className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleScroll("home")}>
                        <span className={selectedId === "home" ? 'selected' : ''}>Home</span>
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
                    <div className='btn-hambur-container' >
                        <a href={curriculo} download>Download currículo</a>
                        <div className='btn-hambur-background'></div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;
