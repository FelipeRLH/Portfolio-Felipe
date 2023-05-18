// REACT
import { Link } from 'react-router-dom';
import { BsFillCameraReelsFill, BsBoxArrowUpRight } from 'react-icons/bs';

// CSS
import styles from "./Projectdata.module.css"
import "./Projectsdata.css"

function Projectsdata({ type, visibility, title, description, tecs, img, links }) {

    return (
        <div>
            {(type === "type1") &&
                <div className={styles.ContainerProject}>
                    <div className={styles.Project}>
                        <div className={`ImageContainer ${visibility[0]}`}>
                            <Link to={links[0]}><img src={img} alt={title} /></Link>
                        </div>

                        <div className={`DescriptionContainer ${visibility[1]}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className={styles.Tecs}>
                                <span>{tecs[0]}</span>
                                <span>{tecs[1]}</span>
                                <span>{tecs[2]}</span>
                                <span>{tecs[3]}</span>
                                <span>{tecs[4]}</span>
                            </div>
                            <div className={styles.Links}>
                                <Link to={links[0]}>Criação <BsFillCameraReelsFill /></Link>
                                <Link to={links[1]} target='_blanc'>Ver Demonstração <BsBoxArrowUpRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {(type === "type2") &&
                <div className={styles.ContainerProject}>
                    <div className={styles.Project}>
                        <div className={`DescriptionContainer ${visibility[0]}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className={styles.Tecs}>
                                <span>{tecs[0]}</span>
                                <span>{tecs[1]}</span>
                                <span>{tecs[2]}</span>
                                <span>{tecs[3]}</span>
                                <span>{tecs[4]}</span>
                            </div>
                            <div className={styles.Links}>
                                <Link to={links[0]}>Criação <BsFillCameraReelsFill /></Link>
                                <Link to={links[1]} target='_blanc'>Ver Demonstração <BsBoxArrowUpRight /></Link>
                            </div>
                        </div>
                        <div className={`ImageContainer ${visibility[1]}`}>
                            <Link to={links[0]}><img src={img} alt={title} /></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Projectsdata