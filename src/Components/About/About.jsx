import './About.css';

function About() {
    return (
        <div className='About'>
            <div className='AboutContainer'>
                <h2>Informacion Extra</h2>
                <div className='AboutContainerImage'>
                    <div className='AboutContainerImageText'>
                    <p>Avon es una reconocida empresa de productos de belleza y cuidado personal que ha estado en el mercado por décadas.</p>
                    <p>La misión de Avon ha variado a lo largo de los años, pero generalmente se centra en empoderar a las mujeres y enriquecer sus vidas. Avon se ha comprometido a brindar oportunidades económicas a las mujeres a través de la venta directa de productos de belleza y cuidado personal. Además, la empresa se ha destacado por su apoyo a causas sociales, como la lucha contra el cáncer de mama y la violencia doméstica.</p>
                    <p>La visión de Avon es crear un mundo en el que todas las mujeres puedan alcanzar su máximo potencial, tanto en el aspecto económico como en el personal. La empresa aspira a ser líder en la industria de la belleza y el cuidado personal, ofreciendo productos de alta calidad que satisfagan las necesidades y deseos de sus clientes en todo el mundo.</p>
                    </div>
                    <img src="https://trabajaconavon.com/wp-content/uploads/2021/04/Captura-de-pantalla-110-1024x523.png" alt="Imagen Avon" />
                </div>
            </div>

            <div className='AboutContainerMap'>
                <h2>Ubicacion</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105019.39038418165!2d-58.96560775664061!3d-34.6583407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc947c74023bc1%3A0x2649277a4578d77e!2sF%C3%A1brica%20Avon!5e0!3m2!1ses-419!2sar!4v1715296939796!5m2!1ses-419!2sar"
                    style={{ border: "0" }}
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>"Mapa de la ubicación de la fábrica de Avon"</p>
            </div>

        </div>
    )
}

export default About; 
