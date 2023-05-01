// REACT
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// CSS
import './ProjectList.css'


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
            <div className='container-projectList'>
                {data.map((item) => {
                    const { id, name, text, image } = item;
                    return (
                        <Link to={`/moreprojects/${id}`} className='link-projectList' key={id}>
                            <div className='project-projectList' >
                                <img src={image} alt={name} />

                                <div className="infos-projectList">
                                    <span>{text}</span>
                                </div>
                            </div>
                            <h2 className="name-projectList">{name}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;