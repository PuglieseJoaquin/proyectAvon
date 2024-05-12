import { useCartContext } from '../../Context/cartContext';
import './CartCard.css';
import DeleteIcon from '@mui/icons-material/Delete';

function CartCard() {
    const { cart, changeQuantityToProduct, deleteProductFromCart } = useCartContext();

    return (
        cart.map((item) => (
            <div className='CartCardContainer'>
                <div className='CartCardContainerImage'>
                    <img src={item.product.image} alt={item.product.title} />
                </div>

                <div className='CartCardContainerTitles'>
                    <div className='CartCardTitles'>
                        <h3>{item.product.title}</h3>
                        <p>{item.product.category}</p>
                    </div>
                    <div className='CartCardCounter'>
                        <button onClick={() => item.quantity > 1 && changeQuantityToProduct(item.product.id, item.quantity - 1)} >-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => changeQuantityToProduct(item.product.id, item.quantity + 1)}>+</button>
                    </div>
                </div>

                <div className='CartCardContainerPriceUnid'>
                    <span>${item.product.price} C/U</span>
                </div>

                <div className='CartCardContainerPriceAll'>
                    <span><b>Total</b>: ${item.quantity * item.product.price} </span>
                    <button onClick={() => deleteProductFromCart(item.product.id)}><DeleteIcon /></button>
                </div>

            </div>
        ))
    );
}

export default CartCard; 