import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <div className="ProductCard">
            <img src={product.image} alt="Imagen de Producto" />
            <h3>{product.title}</h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <div className="ProductCardDetailContainer">
                <div className="ProductCardDetail">
                    <Link to={`/product/${product.id}`}>Detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard; 