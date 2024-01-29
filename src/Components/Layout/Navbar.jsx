import { MdFollowTheSigns } from "react-icons/md";
import styles from './Navbar.module.css';
import { Link} from 'react-router-dom';
import Jubim from "./Jubim";
const Navbar = () =>{
    return(
        <div>
            <div className={ styles.hero_background}>
                <header className={styles.header_container}>
                    <div>
                        <MdFollowTheSigns className={styles.logo}/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/home' className={styles.home}>home</Link>
                            </li>
                            <li>
                                <Link to='/services' className={styles.home}>services</Link>
                            </li>
                            <li>
                                <Link to='/contact' className={styles.home}>contsct us</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className={styles.section}>
                    <div className={ styles.header_div}>
                        <h5>the furture belongs to those who plan as though tomorrow is already here</h5>
                        <p>request assets and management all on one platform</p>
                        <div className={ styles.form_div}>
                            <form>
                                <input placeholder='enter your email'/>
                                <button className={ styles.button_div}>sign up</button>
                            </form>
                        </div>
                    </div>
               </section>
            </div>
           <Jubim/>
        </div>
    )
}
export default Navbar;