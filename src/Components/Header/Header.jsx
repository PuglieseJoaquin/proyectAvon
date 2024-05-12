import './Header.css';
import LogoIcon from "../../assets/icon/avon-logo.jpg";
// Lupa / Home / Contact/Person / Shopping cart / Info
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext';

function Header() {
    const { getTotalItems } = useCartContext();

    return (
        <header className='HeaderContainer'>
            <div className='HeaderContainerTop'>
                <div className='HeaderLogoIcon'>
                    <img src={LogoIcon} alt="Logo-Avon" />
                </div>

                <div className='HeaderNavigationBar'>
                    <input type="text" placeholder='Buscar...' />
                    <button><SearchIcon /></button>
                </div>

                <div className='HeaderIconsLinks'>
                    <Link to="/"><HomeIcon /></Link>
                    <Link to="/about"><InfoIcon /></Link>
                    <Link to='/cart'>
                        <ShoppingCartIcon />
                        <span className='CartLinkItemCount'>{getTotalItems()}</span>
                    </Link>
                </div>
            </div>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/products">Shopping</Link>
                <Link to="/about">Más Informacion</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    )
}


export default Header; 