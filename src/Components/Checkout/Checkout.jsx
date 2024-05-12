import { useState } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
    const [productAdd, setProductAdd] = useState(false);
    const sendProduct = () => {
        setProductAdd(true)
    };

    return (
        <div className='Checkout'>
            {productAdd ? (
                <>
                    <div className='CheckoutContainer'>
                        <h2>El pago fue registrado</h2>
                        <p>Cualquier consulta puede enviarnos mensaje...</p>
                        <Link to='/contact'>Contacto</Link>
                    </div>
                </>
            ) : (
                <>
                    <div className='CheckoutContainer'>
                        <h2>Enviar Checkout</h2>
                        <form>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id='name' placeholder='Ingrese su nombre completo' />

                            <label htmlFor="dni">DNI</label>
                            <input type="text" name="dni" id='dni' placeholder='Ejemplo: 43452344' />

                            <label htmlFor="email">Correo Electronico</label>
                            <input type="email" name="email" id='email' placeholder='Ingrese su mail' />

                            <label htmlFor="contraseña" ></label>
                            <input type="password" name="contraseña" id='contraseña' placeholder='Contraseña...' />

                            <label htmlFor="opciones">Selecciona el medio de pago:</label>
                            <select id="opciones" name="opciones">
                                <option value="Visa">Visa</option>
                                <option value="MercadoPago">Mercado Pago</option>
                                <option value="MasterCard">MasterCard</option>
                            </select>

                            <button onClick={sendProduct}>Enviar</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default Checkout; 
