import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com/in/renan-moreira-da-silva-3a1a681b8" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/" target="_new">
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;