import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Copyright <FontAwesomeIcon icon={faCopyright} /> BlogApp 2022</p>
        </div>
    );
}

export default Footer;