
import styles from './ContactForm.module.css';
const ContactForm = () =>{
    return(
        <div className={ styles.container_form}>
            <section className={ styles.section_form}>
                <div className={ styles.user}>
                    <form>
                        <input type='text' className={ styles.form_input}
                        placeholder='Enter your name here...'/><br/>
                        <input type='email' className={ styles.form_input2}
                        placeholder='Enter your email'/><br/>
                        <input type='phone' className={ styles.form_input3}
                        placeholder='Enter your mobile number her'/><br/>
                        <textarea rows={3} placeholder='Tel us how you fel about us?'/>
                        <input type ='button'value='enter' className={ styles.form_button}/>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactForm;