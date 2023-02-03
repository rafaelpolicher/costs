import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'


function NewProject(){

    const history = useNavigate()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects')

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Create project</h1>
            <p>create your project to add the services</p>
            <ProjectForm btnText='Create project' />
        </div>
    )
}

export default NewProject