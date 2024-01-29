
// import React,{ useEffect } from 'react';
import styles from './HomeSection.module.css';
import gym1 from './gym1.jpg';
import gym2 from './Images/gym2.jpg';
import FooterSection from './FooterSection';
const HomeSection = ()=>{
    return(
        <div className={styles.container}>
            <section className={styles.section}>
                <div className={styles.section_container}>
                    <div className={styles.container_image}>
                        <h2>it's time to regain your fitness</h2>
                        <h3>do fitness <span>anywhere</span> and anytime</h3>
                        <h4>with our training <span>video</span></h4>
                        <button className={ styles.button}>try it for free</button>
                    </div>
                    <div className={ styles.images_gym}>
                        <img src={gym1} alt='not found'/>
                        <img src={gym2} alt='No gym found'/>
                    </div>
                </div>
            </section>
            <FooterSection/>
        </div>
    )
}
export default HomeSection;