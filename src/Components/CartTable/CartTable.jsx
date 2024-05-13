import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext';
import CartCard from '../CartCard/CartCard';
import './CartTable.css';



function CartTable() {
    const { cart, deleteAllFromCart, getTotal, getTotalItems } = useCartContext();
    const ValorDeEntrega = getTotal() / 8;
    const ValorFinal = getTotal() + ValorDeEntrega;

    return (
        <div className='CartTableContainer'>

            <div className='CartTableContainerLeft'>
                <div className='CartTableContainerLeftEncabezado'>
                    <h1>TU CARRITO</h1>
                    <h6>TOTAL ({getTotalItems()} producto/s) <b>${getTotal()}</b></h6>
                    <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
                </div>
                <div >
                    <CartCard />
                </div>
                <div className='CartTableContainerLeftButton'>
                    <button onClick={deleteAllFromCart}>Eliminar Todo</button>
                </div>
            </div>


            <div className='CartTableContainerRight'>
                <Link to='/checkout'>Checkout</Link>

                <div className='CartTableContainerRightTotals'>
                    <h4>Resumen del pedido</h4>

                    <div className='CartTableTotalsItems'>
                        <p>{getTotalItems()} Productos</p>
                        <span>${getTotal()}</span>
                    </div>
                    <div className='CartTableTotalsItems'>
                        <p>Entrega</p>
                        <span>${ValorDeEntrega}</span>
                    </div>

                    <h4>Total</h4>
                    <div className='CartTableTotalsItems'>
                        <p>Cantidad {getTotalItems()}</p>
                        <span>${ValorFinal}</span>
                    </div>
                    <h4>Opciones de pago</h4>
                    <div className='CartTableTotalsImages'>
                        <img src="https://w7.pngwing.com/pngs/314/877/png-transparent-visa-logo-credit-card-debit-card-mastercard-logo-visa-go-blue-text-trademark.png" alt="Visa logo" />
                        <img src="https://brandemia.org/sites/default/files/sites/default/files/logo_mastercard-despues.jpg" alt="Master Card logo" />
                        <img src="https://d2r9epyceweg5n.cloudfront.net/apps/5576-es_AR-Mercado%20Pago.jpg" alt="Mercado Libre Logo" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CartTable; 
