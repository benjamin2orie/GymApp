
import statistics from './PagesMenu/Images/statistics.png';
import styles from './Jubim.module.css';
import Subjubim from './Subjubim';
const Jubim = () => {
    return(
        <div className={ styles.container}>
           <main className={ styles.body_main}>
                <div className={styles.main_div}>
                    <div className={ styles.div_header}>
                        <h3>learn more about us</h3>
                        <p>ipsum dolor sit amet consectetur adipisicing elit. Nihil et, eius adipisci similique maiores impedit. Ad porro at quaerat! Dolorum minima expedita obcaecati! Eaque soluta enim numquam, ab veniam mollitia.</p> 
                        <button className={ styles.buttons}>sign up</button>
                    </div>
                    <div className={ styles.div_images}>
                        <img src={statistics} alt='statistics iamges'/>
                    </div>
                </div>
           </main>
           <Subjubim/>

        </div>
    )
}
export default Jubim;