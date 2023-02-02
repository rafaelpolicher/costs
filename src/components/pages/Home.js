import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start to manage your projects right now</p>
            <a href="/">Build a project</a>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home