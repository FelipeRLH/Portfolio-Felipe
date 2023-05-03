// REACT
import { Link } from "react-router-dom"
import { BsArrowReturnLeft } from 'react-icons/bs';

// CSS
import "./MoreAbout.css"

// IMG
import avatarHiBack from "../../Assets/About/avatarHiBack.png"
import avatarDedoBack from "../../Assets/About/avatarDedoBack.png"
import mais_sobre from "../../Assets/About/mais_sobre.png"
import dev_moreabout from "../../Assets/About/dev_moreabout.png"
import tools_moreabout from "../../Assets/About/tools_moreabout.png"
import pokeballTop from "../../Assets/About/pokeballTop.png"
import pokeballBottom from "../../Assets/About/pokeballBottom.png"

function MoreAbout() {
    return (
        <div className='container-moreabout'>
            <div className="btn-moreabout">
                <Link to={"/"}><BsArrowReturnLeft /> Voltar</Link>
            </div>

            <div className="home-moreabout">
                <img className="avatar_hi" src={avatarHiBack} alt="Avatar hi" />
                <div>
                    <h1>Olá, eu sou o <span>Felipe</span></h1>
                    <p>Aqui estão mais algumas informações sobre mim. Continue lendo para me conhecer melhor.</p>
                    <div className="btn-about-home">
                        <Link to={"/"}>Entrar em contato</Link>
                    </div>
                </div>
                <img className="avatar_Dedo" src={avatarDedoBack} alt="Avatar apontando" />
            </div>

            <div className="container-text-moreabout">
                <div className="text-moreabout">
                    <p>
                        Olá, seja bem-vindo(a)! Espero que esteja apreciando o meu portfólio. Gostaria de compartilhar um pouco sobre mim e minha história. Tenho 20 anos e desde os 11 anos me envolvo com computadores. Sempre fui curioso e fascinado em descobrir como as coisas funcionam. Aprendi Photoshop e um pouco sobre edição de vídeo de forma autodidata, apenas por ser curioso. Aprendi muitas outras habilidades dessa forma, incluindo empreendedorismo - algo que me interesso desde muito novo - ao assistir vídeos e ler livros. A leitura é uma paixão que descobri cedo e desde então, coleciono títulos como "Pai Rico, Pai Pobre", "Os Segredos da Mente Milionária" e "A Startup Enxuta".
                        Assim que terminei o ensino médio, decidi buscar algo para fazer. No meu tempo livre comecei a aprender algo que sempre tive curiosidade, a programação. No começo, era apenas um hobby, mas percebi que poderia me tornar um excelente profissional fazendo o que amo: criar. Me apaixonei pela programação porque vi que posso usar minha criatividade para criar algo, uma coisa que sempre gostei de fazer. Comprei um curso para seguir uma linha de estudo e, após isso, fiz vários outros e continuo aprendendo sempre, assistindo a aulas e criando projetos. Agora, minha meta é aprimorar meu inglês.
                    </p>
                    <div>
                        <h2>Mais <span>sobre mim</span></h2>
                        <img src={mais_sobre} alt="" />
                    </div>
                </div>
            </div>

            <div className="container-skills">
                <div className="title-skills">
                    <h2>Skills</h2>
                    <p>Essas são as tecnologias e ferramentas que uso no desenvolvimento. </p>
                </div>

                <div className="container-devtools">
                    <img className="pokeballTop" src={pokeballTop} alt="" />
                    <img className="pokeballBottom" src={pokeballBottom} alt="" />
                    <div className="dev-skills">
                        <img src={dev_moreabout} alt="" height={126} />
                        <h3>Desenvolvimento</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <span></span>
                    <div className="tools-skills">
                        <img src={tools_moreabout} alt="" />
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

            <div className="container-softskill-moreabout">
                <div className="Title-softskills">
                    <h2>Valores fundamentais que orientam meu trabalho</h2>
                    <p>Estes são alguns dos valores que considero essenciais em todas as áreas da minha vida, principalmente no âmbito profissional. São valores que contribuem para o meu desenvolvimento pessoal e melhoram tanto a minha vida quanto a das pessoas que estão ao meu redor, e deixam o ambiente de trabalho mais leve.</p>
                </div>

                <div className="softskills-moreabout">
                    <div className="item-softskill">
                        <h3>Trabalho inteligente</h3>
                        <p>Sempre procuro trabalhar de maneira inteligente, utilizando as ferramentas adequadas para otimizar meu tempo e aumentar minha eficiência.</p>
                    </div>
                    <div className="item-softskill">
                        <h3>Inovação</h3>
                        <p>A inovação é fundamental para o sucesso, é o que nos diferencia da multidão, tudo vive de inovação. Como criador sempre busco inovar nas minhas aplicações usando minha criatividade.</p>
                    </div>
                    <div className="item-softskill">
                        <h3>Liderança</h3>
                        <p>Espirito de liderança é importante em todos os níveis hierárquicos, pois todos precisam de inspiração. Exercito a liderança pois é uma peça chave para motivar e alcançar os objetivo junto com a equipe.</p>
                    </div>
                    <div className="item-softskill">
                        <h3>Comunicação</h3>
                        <p>A comunicação é a base de tudo. Saber se comunicar bem é fundamental para que o seu trabalho e o da sua equipe funcionem de forma eficiente. Por isso, busco aprimorar minha comunicação no dia a dia, esclarecendo dúvidas e lendo livros.</p>
                    </div>
                    <div className="item-softskill">
                        <h3>Trabalho em equipe</h3>
                        <p>O conhecimento está disperso pela sociedade, mas o trabalho em equipe une esse conhecimento em um grupo de pessoas. Sou capaz de trabalhar de forma colaborativa e compartilhando conhecimento.</p>
                    </div>
                    <div className="item-softskill">
                        <h3>Adaptabilidade</h3>
                        <p>Ser capaz de se adaptar a mudanças e desafios rapidamente e com facilidade é umas das habilidades mais importantes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreAbout