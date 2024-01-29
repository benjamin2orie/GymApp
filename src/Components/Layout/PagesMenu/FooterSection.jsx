

import { MdCalendarMonth, MdOutlineAutoStories, MdOutlineDevices } from "react-icons/md";
import styles from './FooterSection.module.css';
const FooterSection = ()=>{
    return(
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.daily_div}>
                       <MdCalendarMonth className={ styles.Icons}/>
                       <h3>daily workouts 7 days a week</h3>
                       <p>get personalized workouts on a daily basis from professionals</p>
                    </div>
                    <div className={styles.footer_div}>
                        <MdOutlineDevices className={ styles.Icons}/>
                        <h3>access from any platform</h3>
                        <p>use all the benefits of the service anywhere and on any devices</p>
                    </div>
                    <div>
                        <MdOutlineAutoStories className={ styles.Icons}/>
                        <h3>guides & community</h3>
                        <p>a private community where we help each other</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterSection;