// REACT
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';

// COMPONENTS
import ProjectList from '../../Components/Projects/ProjectList'

// CSS
import './MoreProjects.css'

function MoreProjects() {
    return (
        <section>
            <div className='container_projects'>
                <div className="btn-moreabout">
                    <Link to={"/"}><BsArrowReturnLeft />Voltar</Link>
                </div>

                <div className='title-MoreProjects'>
                    <h1>Todos os Projetos</h1>
                    <p>Clique em um projeto para ver detalhes da criação.</p>
                </div>
                <ProjectList />
            </div>
        </section>
    )
}

export default MoreProjects;