
import yoga from './Images/yog.webp';
import runing from './Images/runing.webp';
// import women from './Images/women.webp';
import womenbik from './Images/womenbik.jpg'
import styles from './ServiceGym.module.css';
import { MdHome, MdPerson, MdSettings } from 'react-icons/md';
const ServiceGym = () =>{
    return(
        <div className={ styles.container_gym}>
            <div>
               <section>
                    <div className={ styles.conga_gym}>
                        <div className={ styles.conga_image}>
                            <div className={ styles.div_m}>
                                <h3>yoga</h3>
                                <p>start now</p>
                            </div>
                            <div>
                                <img src={yoga} alt="yoga gym contain" className={ styles.yoga_gym}/>
                            </div>
                        </div>
                        <div className={ styles.conga_image2}>
                            <div className={ styles.div_m}>
                                <h3>cycling</h3>
                                <p>start now</p>
                            </div>
                            <div>
                                <img src={ womenbik} alt=" gym women doing exercise" className={ styles.yoga_gym2}/>
                            </div>
                        </div>
                        <div className={ styles.conga_image3}>
                            <div className={ styles.div_m}>
                                <h3>runing</h3>
                                <p>start now</p>
                            </div>
                            <div>
                                <img src={runing} alt="gym runing exercise" className={ styles.yoga_gym3}/>
                            </div>
                        </div>
                    </div>
               </section>
            </div>
            <footer>
                <div className={ styles.footer_home}>
                    <MdHome/>
                    <MdPerson/>
                    <MdSettings/>
                </div>
            </footer>
        </div>
    )
}


export default ServiceGym;