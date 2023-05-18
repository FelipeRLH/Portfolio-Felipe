// REACT
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs';

// CSS
import styles from "./ProjectsCreation.module.css"

// IMG
import ytlogo from "../../../Assets/projects/ytlogo.png"
import avatarFogo from "../../../Assets/projects/avatarFogo.png"


function ProjectCreation() {
  const [projectCurrent, setprojectCurrent] = useState({})
  const { id } = useParams()

  // Buscando dados Json
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/static/json/projectCreation.json`)
      const data = await response.json();
      const objeto = data.find(obj => obj.id === id)
      setprojectCurrent(objeto)
    }
    fetchData()
  }, [id])


  const { imageVid, name, description, tecs, dep, githublink } = projectCurrent;
  return (
    <section>
      < div className={styles.NavProject} >
        <img src={ytlogo} alt="Logo Youtube" width={140} />
        <Link to={"/"}><BsArrowReturnLeft /> Voltar</Link>
      </div >

      <div className={styles.ContainerContent}>
        <div className={styles.ContainerVideo}>
          <img className={styles.Video} src={imageVid} alt="" />
          <h1>{name}</h1>
          <div className={styles.TitleCanal}>
            <img src={avatarFogo} alt="" width={45} />
            <h3>Felipe Ramalho</h3>
          </div>
        </div>

        {imageVid &&
          <>
            <aside className={styles.ContainerAside}>
              <div className={styles.AsideContent}>
                <div className={styles.ContainerTecs}>
                  <h2>Tecnologias:</h2>
                  <img src={tecs[0]} alt="Logo Tecnologia" />
                  <img src={tecs[1]} alt="Logo Tecnologia" />
                  {tecs[2] &&
                    <img src={tecs[2]} alt="Logo Tecnologia" />
                  }
                  {tecs[3] &&
                    <img src={tecs[3]} alt="Logo Tecnologia" />
                  }
                  {tecs[4] &&
                    <img src={tecs[4]} alt="Logo Tecnologia" />
                  }
                </div>

                <div className={styles.ContainerDep}>
                  <h2>Dependências:</h2>
                  <div>
                    {dep[0] &&
                      <span>{dep[0]}</span>
                    }
                    {dep[1] &&
                      <span>{dep[1]}</span>
                    }
                    {dep[2] &&
                      <span>{dep[2]}</span>
                    }
                    {dep[3] &&
                      <span>{dep[3]}</span>
                    }
                  </div>
                </div>

                <div className={styles.Description}>
                  <p>{description}</p>
                </div>
              </div>
              <Link className={styles.BtnGitHub} to={githublink} target="_blank">
                Projeto no GitHub
              </Link>
            </aside>
          </>
        }
      </div>
    </section >
  )
}

export default ProjectCreation;