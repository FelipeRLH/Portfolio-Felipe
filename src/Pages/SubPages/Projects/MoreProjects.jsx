// REACT
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';

// COMPONENTS
import ProjectList from '../../../Components/Projects/ProjectList'

// CSS
import styles from './MoreProjects.module.css'

function MoreProjects() {
    return (
        <section>
            <div>
                <div className={styles.BtnReturn}>
                    <Link to={"/"}><BsArrowReturnLeft />Voltar</Link>
                </div>

                <div className={styles.Title}>
                    <h1>Todos os Projetos</h1>
                    <p>Clique em um projeto para ver detalhes da criação.</p>
                </div>
                <ProjectList />
            </div>
        </section>
    )
}

export default MoreProjects;