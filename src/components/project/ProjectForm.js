import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitButton from '../form/SubmitButton.js'
import styles from './ProjectForm.module.css'
function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input type='text' text='Project name' name='name' placeholder='Enter the name'/>

            <Input type='number' text='Project budget' name='budget' placeholder='Enter the total budget'/>

            <Select name='category_id' text='Select the category'/>

            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm