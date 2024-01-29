
import invoice from './PagesMenu/Images/invoice.png';
import skills from './PagesMenu/Images/skills.png';
import notes from './PagesMenu/Images/notes.png';
import styles from './Subsectionjubim.module.css';
const Subsectionjubim =() => {
    return(
        <div className={ styles.container_sub}>
            <div className={styles.p_div}>
                <h3 className={ styles.h3_content}>features</h3>
                <div className={ styles.p_image}>
                    <div className={ styles.sub_p_image}>
                        <img src={invoice} alt='invoice' className={styles.invoice}/>
                        <h3>lorem management</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, tempora.</p>
                    </div>
                    <div className={ styles.sub_p_image}>
                        <img src={notes} alt='invoice' className={styles.invoices}/>
                        <h3>lorem request</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatem!</p>
                    </div>
                    <div className={ styles.sub_p_image}>
                        <img src={skills} alt='skills' className={ styles.invoices}/>
                        <h3>lorem tracking</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, distinctio.</p>
                    </div>
                </div>
            </div>
            <div className={ styles.center_div}>
                <h5>getting started takes less than a minutes</h5>
                <form>
                    <input placeholder='enter your email here' className={ styles.input}/>
                    <button className={ styles.sub_button}>give it a try</button>
                </form>
            </div>
        </div>
    )
}

export default Subsectionjubim;