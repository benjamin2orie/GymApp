
import HomeSection from "./HomeSection";
import { MdOutlineVerticalDistribute } from "react-icons/md";
import styles from './Home.module.css';
const Home = () =>{
    return(
        <div className={styles.divContainer}>
           <header className={styles.home_header}>
            <MdOutlineVerticalDistribute className={ styles.logo}/>
            <nav>
                <ul>
                    <li>workout & programs</li>
                    <li>nurition plans</li>
                    <li>commmunity</li>
                </ul>
            </nav>
            </header> 
            <HomeSection/>

        </div>
    )
}
export default Home;