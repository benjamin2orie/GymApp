
import { MdCall, MdFacebook, MdFollowTheSigns, MdMail } from 'react-icons/md';
import styles from './Contact.module.css';
// import ServiceGym from './ServiceGym';
import ContactForm from './ContactForm';
// import ServiceActivity from './ServiceActivity';
const Contact= ()=>{
    return(
        <div className={styles.divContact}>
            <div className={ styles.contact_header}>
                <header className={ styles.div_menu}>
                    <div><MdFollowTheSigns className={ styles.logo}/></div>
                    <nav>
                        <ul>
                            <li>members</li>
                            <li>mentors</li>
                            <li>price</li>
                        </ul>
                    </nav>
                </header>
                <div className={ styles.parent_div}>
                    <main className={ styles.contact_main}>
                        <div className={ styles.contact_div}>
                            <h3>have some questions?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, beatae?</p>
                        </div>
                        <div className={ styles.get_intouch}>
                            <h3>get in touch</h3>
                            <p><span><MdCall className={ styles.call}/> <span>+234</span> 8037390244</span></p>
                            <p className={ styles.para}><span><MdMail/>  gmhaz@outlook.com</span></p>
                            <p><MdFacebook className={ styles.fac}/> @gmhaz</p>
                        </div>
                    </main>
                    <ContactForm/>

                </div>
            </div>
            <footer className={ styles.contact_foot}>
                <p>copyright&copy;2024</p>
            </footer>
            {/* <ServiceGym/> */}
        </div>
    )
}
export default Contact;