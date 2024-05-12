import { useCartContext } from "../../Context/cartContext";
import CartTable from "../CartTable/CartTable";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
    const { cart } = useCartContext();
    const cantProducts = cart.length; // Utiliza la propiedad length para obtener la cantidad de productos en el carrito

    return (
        <div>
            {cantProducts === 0 ? (
                <>
                    <div className="CartContainerVacio">
                        <h1>EL CARRITO ESTÁ VACÍO</h1>
                        <p>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
                        <Link to='/products'>Empezar <ArrowRightAltIcon/></Link>
                    </div>
                </>
            ) : (
                <CartTable />
            )}
        </div>
    );
}

export default Cart;
