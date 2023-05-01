// REACT
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

// COMPONENTS
import Projectsdata from "./Projectsdata"

// IMG
import gerenciadorProjImg from "../../Assets/projects/gerenciadordeprojetos.png"
import filmestmdb from "../../Assets/projects/filmestmdb.png"
import siteportfolio from "../../Assets/projects/siteportfolio.png"
import portfoliofelipe from "../../Assets/projects/portfoliofelipe.png"

// CSS
import "./Projects.css"


function Projects() {
  // VISIBILITY ON SCROLL
  const [visibilityLeft, setVisibilityLeft] = useState({
    project1: "hidden",
    project2: "hidden",
    project3: "hidden",
    project4: "hidden"

  })
  const [visibilityRight, setVisibilityRight] = useState({
    project1: "hidden",
    project2: "hidden",
    project3: "hidden",
    project4: "hidden"
  })

  // VISIBILITY ON SCROLL
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 1100) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project1: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project1: "showRight" }
        })
      }
      if (window.scrollY >= 1500) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project2: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project2: "showRight" }
        })
      }
      if (window.scrollY >= 1900) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project3: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project3: "showRight" }
        })
      }
      if (window.scrollY >= 2300) {
        setVisibilityLeft(prevState => {
          return { ...prevState, project4: "showLeft" }
        })
        setVisibilityRight(prevState => {
          return { ...prevState, project4: "showRight" }
        })
      }
    }


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const project1 = {
    type: "type1",
    visibility: [visibilityLeft.project1, visibilityRight.project1],
    title: "Portfólio Felipe",
    img: portfoliofelipe,
    description: "Este projeto consiste em uma aplicação de ToDo List desenvolvida utilizando a biblioteca React. Com essa aplicação, é possível adicionar tarefas à lista, marcá-las como concluídas ou removê-las da lista. Uma das vantagens dessa aplicação é que as informações inseridas pelo usuário são armazenadas localmente, utilizando o recurso de localStorage. Dessa forma, mesmo após atualizar a página, as informações permanecem salvas na memória do navegador.",
    tecs: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    links: ["/moreprojects/portfoliofelipe", "https://portfolio-felipe-brown.vercel.app/"]
  }
  const project2 = {
    type: "type2",
    visibility: [visibilityLeft.project2, visibilityRight.project2],
    title: "Gerenciador de projetos",
    img: gerenciadorProjImg,
    description: "Esta aplicação é um gerenciador de projetos que tem como objetivo facilitar o trabalho em equipe, permitindo que todos os membros do time tenham acesso às informações de forma prática e organizada. Com ela, é possível adicionar, remover e editar projetos de forma simples e intuitiva. Utilizei amplamente a técnica de componentização do React, o que possibilitou a criação de componentes reutilizáveis e de fácil manutenção. Além disso, utilizei a Fetch API com os métodos GET e POST para acessar dados em um banco de dados. Para simplificar o processo de desenvolvimento e tornar o projeto mais eficiente, também fiz uso de uma biblioteca externa chamada json-server, que permitiu a criação de um banco de dados local de forma simples e eficiente.",
    tecs: ["HTML", "CSS", "JavaScript", "React"],
    links: ["/moreprojects/GerenciadorProjects"]
  }
  const project3 = {
    type: "type1",
    visibility: [visibilityLeft.project3, visibilityRight.project3],
    title: "Movies",
    img: filmestmdb,
    description: "A aplicação conta com uma lista dos melhores filmes e um buscador, que permite pesquisar filmes por nome e visualizar detalhes como orçamento, receita, duração, entre outros. Durante o desenvolvimento do projeto, utilizei a Fetch API para buscar informações diretamente da API do TMDB, o que proporcionou um carregamento rápido dos dados e uma experiência mais fluida para o usuário. Além disso, utilizei a biblioteca React-router para configuração das rotas. Para acrescentar ícones à interface, utilizei a biblioteca React-icons, que oferece uma grande variedade de opções.",
    tecs: ["HTML", "CSS", "JavaScript", "React"],
    links: ["/moreprojects/Filmes-TMDB", "https://filmes-tmdb.vercel.app/"]
  }
  const project4 = {
    type: "type2",
    visibility: [visibilityLeft.project4, visibilityRight.project4],
    title: "Site Portfólio Genérico",
    img: siteportfolio,
    description: "Este é um site portfólio que criei usando React e Figma para o design. Conta com diversas funcionalidades, como configuração de rotas com o React Router, permitindo a criação de rotas específicas utilizando o hook useParams. Realizei requisições à API utilizando o Fetch e realizei o tratamento dos dados provenientes de um arquivo JSON. Utilizei também bibliotecas externas do npm para facilitar o desenvolvimento. Para estilizar o site, utilizei técnicas de CSS como o Flexbox e o Grid, garantindo uma boa disposição dos elementos na página e proporcionando uma boa experiência ao usuário.",
    tecs: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    links: ["https://github.com/FelipeRLH/Site-Portfolio-Felipe", "https://site-portfolio-2.vercel.app/"]
  }

  return (
    <div id='projetos'>
      <div className='container-projects'>
        <div className='title-projects'>
          <h2>Meus <span>Projetos</span></h2>
          <p>Estes são alguns dos principais projetos que ja realizei. Fique a vontade para clicar e navegar neles.</p>
        </div>
        <Projectsdata
          type={project1.type}
          visibility={project1.visibility}
          title={project1.title}
          description={project1.description}
          tecs={project1.tecs}
          img={project1.img}
          links={project1.links} />
        <Projectsdata
          type={project2.type}
          visibility={project2.visibility}
          title={project2.title}
          description={project2.description}
          tecs={project2.tecs}
          img={project2.img}
          links={project2.links} />
        <Projectsdata
          type={project3.type}
          visibility={project3.visibility}
          title={project3.title}
          description={project3.description}
          tecs={project3.tecs}
          img={project3.img}
          links={project3.links} />
        <Projectsdata
          type={project4.type}
          visibility={project4.visibility}
          title={project4.title}
          description={project4.description}
          tecs={project4.tecs}
          img={project4.img}
          links={project4.links} />

      </div>

      <div className="more-projects">
        <Link to={"/moreprojects"} onClick={() => window.scrollY(0)}>Mais projetos</Link>
        <div className="back-btn-about" />
      </div>
    </div>
  )
}

export default Projects