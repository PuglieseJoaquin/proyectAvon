import { Link } from "react-router-dom";
import "./Home.css";
import HomeCarrusel from "../HomeCarrusel/HomeCarrusel";
import ProductsListContainer from "../ProductsListContainer/ProductsListContainer";
import ProductsOffers from "../ProductsOffers/ProductsOffers";

function Home() {
    return (
        <div>
            <div className="HomeContent">
                <div className="HomeImg">
                    <img src="src\assets\image\Avon - Campaign 22 Brochure.jpg" alt="Imagen Portada" />
                </div>
                <div className="HomeText">
                    <h1>Ofertas Especiales</h1>
                    <p>Belleza y confianza para cada mujer</p>
                    <Link to="/products" className="HomeTextLink">Ver Productos</Link>
                </div>
            </div>    
                <ProductsOffers/>      
                <HomeCarrusel/>  
                <ProductsListContainer className='HomeContentProducts'/>
        </div>
    )
}

export default Home; 
