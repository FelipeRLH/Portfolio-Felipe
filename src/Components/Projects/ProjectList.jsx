// REACT
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// CSS
import styles from './ProjectList.module.css'


function ProjectList() {
    const [data, setData] = useState([])

    // FETCH PARA BUSCAR DADOS JSON
    useEffect(() => {
        fetch('static/json/projectList.json')
            .then((response) => response.json())
            .then(setData)
    }, [])
    if (!data || !data.length) return null;

    return (
        <div>
            <div className={styles.ContainerProject}>
                {data.map((item) => {
                    const { id, name, text, image } = item;
                    return (
                        <Link to={`/moreprojects/${id}`} className={styles.LinkProject} key={id}>
                            <div className={styles.Project} >
                                <img src={image} alt={name} />

                                <div className={styles.Infos}>
                                    <span>{text}</span>
                                </div>
                            </div>
                            <h2 className={styles.Name}>{name}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;