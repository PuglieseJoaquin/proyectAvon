import { createContext, useContext, useState } from "react";
// Tener en cuenta las importaciones 

const CartContext = createContext(); 

export const useCartContext = () => useContext(CartContext); 

function CartProvider({children}){
    const [cart,setCart] = useState([]);

    // Funcion que nos permite agregar productos al carrito si es que ya esta 
    const addProductToCart = (product, quantity) => {
        if(cart.some((item) => item.product.id == product.id)){ 
            const cartCharged = cart.map((item) =>{
                if(item.product.id == product.id){ 
                    item.quantity += quantity; 
                }
                return item; 
            }); 
            return setCart(cartCharged); 
        }
        setCart([
            ... cart, 
            { 
            quantity,
            product, 
            },
        ]); 
    }; 

    // Funciones para borrar
    //Funcionalidad para eleminar productos del carrito 
    const deleteProductFromCart = (id) => {
        setCart(cart.filter((item) => item.product.id != id));
    }
    // Funcionalidad para borrar todo
    const deleteAllFromCart = () => {
        setCart([]); 
    }
    //Funcion para cambiar un producto
    const changeQuantityToProduct = (id, quantity) => {
        setCart( cart.map((item) =>{
            if(item.product.id == id){ 
                item.quantity = quantity; 
            }
            return item; 
        }) 
        ); 
    } 
    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    };
    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    return <CartContext.Provider value={{cart, addProductToCart, deleteProductFromCart, deleteAllFromCart, changeQuantityToProduct, getTotal, getTotalItems}}>{children}</CartContext.Provider>
}

export default CartProvider; 