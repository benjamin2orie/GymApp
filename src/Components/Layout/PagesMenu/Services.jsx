
import ServiceActivity from './ServiceActivity';
import fitness1 from './Images/Fitness1.webp';
import styles from './Services.module.css';
const Services = () =>{
    return(
        <div className={styles.servContainer}>
            <section className={ styles.section_gym}>
                <div className={ styles.div_gym}>
                    <div className={ styles.container}>
                        <h2>Lets start your habits</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus animi earum exercitationem quos distinctio maxime recusandae ducimus ipsam quasi officia.</p>
                        <p className={ styles.p_button}>start now</p>
                     </div>
                     <div>
                    <img src={ fitness1} alt='fitness gym' className={ styles.cat}/>
                    </div>
                </div>
            </section>
            <ServiceActivity/>
        </div>
    )
}
export default Services;