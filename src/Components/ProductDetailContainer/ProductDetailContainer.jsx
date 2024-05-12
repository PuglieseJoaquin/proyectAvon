import { useEffect, useState } from 'react';
import './ProductDetailContainer.css';
import { useParams } from "react-router-dom";
import {useProductsContext} from "../../Context/productsContext";
import ProductDetail from '../ProductDetail/ProductDetail';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function ProductDetailContainer() {
const { getProductById } = useProductsContext();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getById = async () => {
    const prod = await getProductById(productId);
    setProduct(prod);
  };

  useEffect(() => {
    getById();
  }, []);

    return (
        <div className='ProductDetailContainer'>
          <div className='ProductDetailNavigation'>
            <p className='ProductDetailNavigationSection'>Home</p>
            <KeyboardDoubleArrowRightIcon/>
            <p className='ProductDetailNavigationSection'>Shop</p>
            <KeyboardDoubleArrowRightIcon/>
            <p className='ProductDetailNavigationProduct'>{product && product.title}</p> 
          </div>
            {!product ? (
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div> 
            ) : ( <ProductDetail product={product} /> ) }
        </div>
    )
}

export default ProductDetailContainer; 

