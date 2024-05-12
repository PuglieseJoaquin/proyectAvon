import './Contact.css';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

function Contact() {
    const [productAdd, setProductAdd] = useState(false);
    const sendProduct = () => {
        setProductAdd(true)
    };

    return (
        <div className='ContactContainer'>
            {productAdd ? (
                <>
                    <div className='ContactMensaje'>
                        <h2>Listo!!!</h2>
                        <p>Tu mensaje quedo registrado y pronto te llegara una respuesta</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet totam modi culpa iste quia ipsum voluptatum, vitae velit error alias veniam minus porro possimus nam odio quae corrupti libero voluptatem?</p>
                        <img src="src\assets\image\img-contact.jpg" alt="Imagen de contacto" />
                    </div>
                </>
            ) : (
                <>
                    <div className='ContactInfo'>
                        <h2>Contactame</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consequatur repellat nostrum, dolorum necessitatibus quas quasi culpa, quis excepturi hic sint, dignissimos nobis? Ipsa repellat corporis voluptates facere excepturi.</p>
                        <a href="#"><PhoneEnabledIcon />1170269644</a>
                        <a href="#"><EmailIcon />@gmail.com</a>
                        <a href="#"><LocationOnIcon />Ubi</a>
                    </div>
                    <form action="#" autoComplete='off'>
                        <input type="text" name="nombre" placeholder='Ingrese su nombre' />
                        <input type="email" name="email" placeholder='Ingrese el correo' />
                        <textarea name="mensaje" placeholder='Ingresa tu mensaje'></textarea>
                        <button onClick={sendProduct}>Enviar <ArrowForwardIcon /></button>
                    </form>
                </>
            )}
        </div>
    )
}

export default Contact; 

