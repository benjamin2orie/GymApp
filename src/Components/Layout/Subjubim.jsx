
import Jubimfooter from './Jubimfooter';
import settings from './PagesMenu/Images/settings.png';
import styles from './Subjubim.module.css';
import Subsectionjubim from './Subsectionjubim';
const Subjubim = () =>{
    return(
        <div className={ styles.sub_container}>
            <section className={ styles.sub_section}>
                <div className={ styles.sub_divsection}>
                    <div className={ styles.sub_div}>
                        <div className={ styles.sub_image_div}>
                            <img src={settings} alt='settings'/>
                        </div>
                        <div className={ styles.sidebar_div}>
                            <h3>how it works</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident. Dicta ipsa non ex laudantium ipsum aliquam tenetur, quos consequuntur similique rerum. Molestias corporis alias ipsa sit sequi consequatur sapiente.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Subsectionjubim/>
            <Jubimfooter/>
        </div>
    )
}

export default Subjubim;