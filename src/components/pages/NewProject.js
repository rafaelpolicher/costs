import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const history = useNavigate()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        history("/projects", {state: { message: "Project created with succes!" }});
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create project</h1>
      <p>Create your project and then add services</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}

export default NewProject