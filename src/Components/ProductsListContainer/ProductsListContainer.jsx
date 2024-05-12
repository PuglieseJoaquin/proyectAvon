import { useEffect } from "react";
import { useProductsContext } from "../../Context/productsContext";
import "./ProductsListContainer.css";
import ProductsList from "../ProductsList/ProductsList";

function ProductsListContainer(){
    const {products, getProducts} = useProductsContext();
    console.log("Productos: ", products)
    // Manejo de asincronia 
    useEffect(() =>{
        getProducts(); 
    },[]);
    return (
    <div className="ProductsListContainer">
        <h2>Productos</h2>
        {products.length == 0 ? (
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        ) : (
            <ProductsList products={products}/>
        )}
    </div>
    );
}

export default ProductsListContainer; 
