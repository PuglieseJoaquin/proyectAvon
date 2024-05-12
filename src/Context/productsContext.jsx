import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
// Creacion de Contexto 
export const ProductsContext = createContext(); 

export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({children}){
    const [products, setProducts] = useState([]);

    // Toma los productos con filtro en categoria 
    const getProducts = async (category = null) => {
        try {
            // traer datos de firestore -> REFERENCIA A LA COLLECTION SIN FILTRO DE CATEGORIA  
            const reference = collection(db, "products"); 
            // REFERENCIA CON FILTRO DE CATEGORIA
            const referenceCategory = query(collection(db, "products"), where("category", "==", category));
            
            const querySnapshot = await getDocs(category ? referenceCategory : reference); 

            const productsArray = []; 
            
            querySnapshot.forEach((doc) => {
                // Por cada una de las vueltas que de mostrara un elemento
                // Accede primero al Id y luego muestra los datos
                productsArray.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            setProducts(productsArray);

        } catch (error) {
            console.error(error);
        }
    };
    
    // Traer data a travez de firebase por ID 
    const getProductById = async (id) => {
        const docReferece = doc(db, "products", id); // Base de datos -> coleccion -> id
        const docSnap = await getDoc(docReferece);
        
        if (docSnap.exists()) {
            return {
                id,
                ... docSnap.data(), 
            }
        } else {
            return null; 
        }

    };

    return (
    <ProductsContext.Provider value={{products, getProducts, getProductById}}>
        {children}
    </ProductsContext.Provider>
    ); 
}

export default ProductsProvider; 