import styles from "./footer.module.css"
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";





const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.left}>
            © 2024 Shoden Ltd, All Rights Reserved
        </div>
        <div className={styles.center}>
            <a href="/terms" className={styles.link}>Terms & Conditions</a>
            <a href="/privacy" className={styles.link}>Privacy Policy</a>
            <a href="/content" className={styles.link}>Content Policy</a>
        </div>
        <div className={styles.right}>
                <FaXTwitter className={styles.icon} />
                <FaInstagram className={styles.icon} />
                <FaLinkedinIn className={styles.icon} />
                <FaEnvelope className={styles.icon} />
            </div>
    </div>
    )
}

export default Footer;