import { FaLinkedinIn, } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import styles from './Jubimfooter.module.css';
const Jubimfooter = () =>{
    return(
        <div className={ styles.footer_container}>
            <div className={ styles.footer_section}>
                <div className={ styles.blog_footer}>
                    
                    <ul>
                        <h3>company</h3>
                        <li>about us</li>
                        <li>contact us</li>
                        <li>career</li>
                        <li>blog</li>
                        <li>press</li>
                    </ul>
                </div>
                <div className={ styles.blog_footer}>
                    <h3>product</h3>
                    <ul>
                        <li>features</li>
                        <li>pricing</li>
                        <li>security</li>
                        <li>vendors</li>
                    </ul>
                </div>
                <div className={ styles.blog_footer}>
                    <h3>resources</h3>
                    <ul>
                        <li>support</li>
                        <li>request a demo</li>
                        <li>sitemap</li>
                        <li>FAQ</li>
                        <li>bug report</li>
                    </ul>
                </div>
                <div className={ styles.blog_footer}>
                    <h3>follow</h3>
                    <div className={ styles.gaps}>
                      <div className={ styles.gap}>
                          <FaTwitter className={ styles.facebook}/>
                        </div>
                        <div>
                           <FaFacebookF className={ styles.facebook}/>
                        </div>
                        <div>
                          <FaLinkedinIn className={ styles.facebook}/>
                        </div>
                    </div>
                </div>
                <div className={ styles.news_letter}>
                    <h3>get in touch</h3>
                    <p>Keep up on our always evolving products and more new features.</p>
                    <p>Enter your email and subscribe to our newsletter</p>
                    <div className={ styles.subscribe}>
                        <form>
                            <input placeholder="enter email"/>
                            <button className={ styles.button_news}><FaPaperPlane/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jubimfooter;