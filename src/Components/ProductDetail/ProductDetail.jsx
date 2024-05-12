import './ProductDetail.css';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // Arriba
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useCartContext } from '../../Context/cartContext';

function ProductDetail({ product }) {
    const { addProductToCart } = useCartContext();
    const [count, setCount] = useState(1);
    const [productAdd, setProductAdd] = useState(false);
    // Funcion para sumar 
    const addCount = () => {
        setCount(count + 1);
    };
    // Funcion para restar
    const removeCount = () => {
        // verificar si se puede restar 1, que no baje de uno
        count > 1 && setCount(count - 1);
    };

    const [showDescription, setShowDescription] = useState(false);
    const [showInformation, setShowInformation] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    const toggleInformation = () => {
        setShowInformation(!showInformation);
    };
    const toggleReviews = () => {
        setShowReviews(!showReviews);
    };
    const sendProduct = () => {
        addProductToCart(product, count)
        setProductAdd(true)
    };
    return (
        <div className='ProductDetail'>
            <div className='ProductDetailImg'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='ProductDetailContent'>
                <div className='ProductDetailInfo'>
                    <h2>{product.title}</h2>
                    <h4>{product.category}</h4>
                    <span>${product.price}</span>
                </div>

                <div className='ProductDetailCounter'>
                    {productAdd ? (
                        <Link to="/cart" className='goCartLink' sx={{ fontSize: '20px', textDecoration: 'none', color: 'black'}}>Ir al Carrito</Link>
                    ) : (
                        <>
                            <div className='ProductDetailCounterContainer'>
                                <button onClick={removeCount}>-</button>
                                <span>{count}</span>
                                <button onClick={addCount}>+</button>
                            </div>
                            <button onClick={sendProduct}>AGREGAR AL CARRITO <LocalMallIcon /></button>
                        </>
                    )}
                </div>

                <div className='ProductDetailMoreThings'>
                    <div className='ProductDetailMoreDescription'>
                        <div className='ProductDetailMoreDescriptionTitle' onClick={toggleDescription}>
                            <h4>Description</h4>
                            {showDescription ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        {showDescription && (
                            <div className='ProductDetailMoreDescriptionText'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque totam odio explicabo, dolorum laudantium doloribus architecto temporibus recusandae, excepturi tempore impedit quod cum animi quam harum, provident corporis expedita quo?</p>
                                <h5>Modo de Uso</h5>
                                <p>lalalalal</p>   {/*Poner modo de uso en Firebase */}
                            </div>
                        )}
                    </div>

                    <div className='ProductDetailMoreInformation'>
                        <div className='ProductDetailMoreInformationTitle' onClick={toggleInformation}>
                            <h4>Informacion Adicional</h4>
                            {showInformation ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        {showInformation && (
                            <div className='ProductDetailMoreInformationText'>
                                <p>---------</p>
                            </div>
                        )}
                    </div>

                    <div className='ProductDetailMoreReviews'>
                        <div className='ProductDetailMoreReviewsTitle' onClick={toggleReviews}>
                            <h4>Reviews</h4>
                            {showReviews ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </div>
                        {showReviews && (
                            <div className='ProductDetailMoreReviewsText'>
                                <p>-----------</p>
                            </div>
                        )}
                    </div>

                    <div className='ProductDetailMoreSocial'>
                        <span>Compartir</span>
                        <div className='ProductDetailMoreSocialButtons'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;
