import { Link } from "react-router-dom";
import "./ProductsOffers.css";

function ProductsOffers(){
    return(
        <div className="ProductsOffersContainer">
            <div className="ProductsOffersContainerImage">
                <img src="src\assets\image\OffertsImage.png" alt="Image de Revista" />
            </div>
            <div className="ProductsOffersContainerText">
                <h3>¿Quieres saber sobre los productos disponibles en esta campaña?</h3>
                <p>"¿Listo para descubrir un mundo de posibilidades? Desde productos innovadores hasta soluciones únicas, estamos aquí para ayudarte a encontrar lo que necesitas. ¡No dudes en enviarnos un mensaje para explorar nuestro catálogo y descubrir cómo nuestros productos pueden mejorar tu vida! Estamos emocionados de escucharte y ayudarte a encontrar la solución perfecta para ti"</p>
                <Link to='https://web.whatsapp.com/'>Pedir Revista</Link>
            </div>
        </div>
    ); 
}

export default ProductsOffers; 
