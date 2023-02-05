import styles from './Projects.module.css'
import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from '../layout/LinkButton'


function Projects(){

    const location = useLocation()
        let message = ''
        if(location.state){
            message = location.state.message
        }


    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My projects</h1>
                <LinkButton to="/newproject" text="Build a project"/>
            </div>
                {message && <Message type="success" msg={message}/>}

                <Container customClass="start">
                    <p>projects</p>
                </Container>
            
        </div>
    )
}

export default Projects