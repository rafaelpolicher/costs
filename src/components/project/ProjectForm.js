import {useEffect, useState} from 'react'
import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'
import styles from './ProjectForm.module.css'

function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch ('http://localhost:5000/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Enter the name'/>

            <Input type='number' text='Project budget' name='budget' placeholder='Enter the total budget'/>

            <Select name='category_id' text='Select the category' options={categories}/>

            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm