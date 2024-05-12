import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div className="FooterLogo">
                <img src="src\assets\image\avon-footer.jpg" alt="Footer logo" />
            </div>
            <div className="FooterIcons">
                <Link to="https://www.facebook.com/?locale=es_LA" className="FooterIcon">
                    <FacebookIcon />
                </Link>
                <Link to="https://www.instagram.com/" className="FooterIcon">
                    <InstagramIcon />
                </Link>
                <Link to="https://www.whatsapp.com/?lang=es_LA" className="FooterIcon">
                    <WhatsAppIcon />
                </Link>
            </div>
        </footer>
    )
}

export default Footer; 