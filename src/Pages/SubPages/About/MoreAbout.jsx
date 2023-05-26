// REACT
import { Link } from "react-router-dom"
import { BsArrowReturnLeft } from 'react-icons/bs';

// IMG
import avatarHiBack from "../../../Assets/About/MoreAbout/avatarHiBack.png"
import avatarDedoBack from "../../../Assets/About/MoreAbout/avatarDedoBack.png"
import dev_moreabout from "../../../Assets/About/MoreAbout/dev_moreabout.png"
import tools_moreabout from "../../../Assets/About/MoreAbout/tools_moreabout.png"
import pokeballTop from "../../../Assets/About/MoreAbout/pokeballTop.png"
import pokeballBottom from "../../../Assets/About/MoreAbout/pokeballBottom.png"

// CSS
import styles from "./MoreAbout.module.css"
import { ButtonReturn } from "../../../Components/StyledComponents/ButtonReturn.style";

function MoreAbout() {
    return (
        <>
            <ButtonReturn><Link to={"/"}><BsArrowReturnLeft />Voltar</Link></ButtonReturn>

            <div className={styles.ContainerHome}>
                <img className={styles.AvatarHi} src={avatarHiBack} alt="Avatar hi" />
                <div>
                    <h1>Olá, eu sou o <span>Felipe</span></h1>
                    <p>Aqui estão mais algumas informações sobre mim. Continue lendo para me conhecer melhor.</p>
                    <div className={styles.BtnContact}>
                        <Link to={"/"}>Entrar em contato</Link>
                    </div>
                </div>
                <img className={styles.AvatarDedo} src={avatarDedoBack} alt="Avatar apontando" />
            </div>

            <div className={styles.ContainerSkills}>
                <div className={styles.TitleSkills}>
                    <h2>Skills</h2>
                    <p>Explore minhas habilidades em cada tecnologia passando o mouse sobre os itens abaixo.</p>
                </div>

                <div className={styles.ContainerDevtools}>
                    <img className={styles.PokeballTop} src={pokeballTop} alt="" />
                    <img className={styles.PokeballBottom} src={pokeballBottom} alt="" />
                    <div>
                        <img src={dev_moreabout} alt="Ícone Desenvolvimento" height={126} />
                        <h3>Desenvolvimento</h3>
                        <ul>
                            <li className={styles.Html}>HTML</li>
                            <li className={styles.Css}>CSS</li>
                            <li className={styles.JavaScript}>JavaScript</li>
                            <li className={styles.React}>React</li>
                            <li className={styles.Bootstrap}>Bootstrap</li>
                            <li className={styles.Git}>Git</li>
                        </ul>
                    </div>
                    <span></span>
                    <div>
                        <img src={tools_moreabout} alt="Ícone Ferramentas" />
                        <h3>Ferramentas</h3>
                        <ul>
                            <li>Figmas</li>
                            <li>Photoshop</li>
                            <li>GitHub</li>
                            <li>Webflow</li>
                            <li>Notion</li>
                            <li>Trello e Slack</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={styles.ContainerSoftskill}>
                <div className={styles.TitleSoftskills}>
                    <h2>Valores fundamentais que orientam meu trabalho</h2>
                    <p>Estes são alguns dos valores que considero essenciais em todas as áreas da minha vida, principalmente no âmbito profissional. São valores que contribuem para o meu desenvolvimento pessoal e melhoram tanto a minha vida quanto a das pessoas que estão ao meu redor, e deixam o ambiente de trabalho mais leve.</p>
                </div>

                <div className={styles.SoftskillsContent}>
                    <div className={styles.SoftskillsItem}>
                        <h3>Trabalho inteligente</h3>
                        <p>Sempre procuro trabalhar de maneira inteligente, utilizando as ferramentas adequadas para otimizar meu tempo e aumentar minha eficiência.</p>
                    </div>
                    <div className={styles.SoftskillsItem}>
                        <h3>Inovação</h3>
                        <p>A inovação é fundamental para o sucesso, é o que nos diferencia da multidão, tudo vive de inovação. Como criador sempre busco inovar nas minhas aplicações usando minha criatividade.</p>
                    </div>
                    <div className={styles.SoftskillsItem}>
                        <h3>Liderança</h3>
                        <p>Espirito de liderança é importante em todos os níveis hierárquicos, pois todos precisam de inspiração. Exercito a liderança pois é uma peça chave para motivar e alcançar os objetivo junto com a equipe.</p>
                    </div>
                    <div className={styles.SoftskillsItem}>
                        <h3>Comunicação</h3>
                        <p>A comunicação é a base de tudo. Saber se comunicar bem é fundamental para que o seu trabalho e o da sua equipe funcionem de forma eficiente. Por isso, busco aprimorar minha comunicação no dia a dia, esclarecendo dúvidas e lendo livros.</p>
                    </div>
                    <div className={styles.SoftskillsItem}>
                        <h3>Trabalho em equipe</h3>
                        <p>O conhecimento está disperso pela sociedade, mas o trabalho em equipe une esse conhecimento em um grupo de pessoas. Sou capaz de trabalhar de forma colaborativa e compartilhando conhecimento.</p>
                    </div>
                    <div className={styles.SoftskillsItem}>
                        <h3>Adaptabilidade</h3>
                        <p>Ser capaz de se adaptar a mudanças e desafios rapidamente e com facilidade é umas das habilidades mais importantes.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreAbout