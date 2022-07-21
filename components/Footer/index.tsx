import styles from './styles.module.scss'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return ( 
        <footer className={styles.footer}>
          <div className={styles.rodapeContainer}>
            <div className={styles.doubt}>
              <a href="#">Dúvidas sobre o AngoPro</a>
              <div className={styles.termos}>
                <a href="#">Termos de uso</a>
                <a href="#">Politica de privacidade</a>
              </div>
            </div>
            
      
            <div className={styles.social}>
              <a className="facebook" href="#"><FaFacebook/></a>
              <a className="twitter" href="#"><FaTwitter/></a>
              <a className={styles.youtube} href="#"><FaYoutube/></a>
              <a className={styles.instagram} href="#"><FaInstagram/></a>
            </div>

            <div className={styles.newsletter}>
              <form action="">
                <label htmlFor="email">Subscribe to our email newsletter</label> <br/>
                <input type="email" name="email" id="email" placeholder="Your email"/>
                <input type="submit" value="SUBSCRIBE"/>
              </form>
            </div>
            
        </div>
      </footer>
     );
}

export default Footer;