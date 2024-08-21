import React from "react"; // Importa React para poder usar JSX y componentes de React

// Define el componente funcional ContactCard
const ContactCard = ({ contacto, onDelete, onEdit }) => {
    return (
        // Contenedor principal del componente
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            {/* Contenedor para la información del contacto */}
            <div className="cajaContacto row g-0 row">
                
                {/* Sección para la imagen del contacto */}
                <div className="imagenContacto col-md-4">
                    <img
                        src="https://empaquestermoformados.com.mx/assets/img/contacto20.png" // Imagen del contacto
                        className="img-fluid rounded-start" // Clases de estilo para hacer la imagen fluida y con bordes redondeados
                        alt="Contacto" // Texto alternativo para la imagen
                    />
                </div>

                {/* Sección para los detalles del contacto */}
                <div className="cardBody col-5">
                    {/* Nombre completo del contacto */}
                    <h5 className="fullnameContacto card-title">{contacto.fullName}</h5>
                    
                    {/* Dirección del contacto */}
                    <p className="addressContacto card-text">
                        <i className="fas fa-map-marker-alt"></i> {contacto.address}
                    </p>
                    
                    {/* Teléfono del contacto */}
                    <p className="phoneContacto card-text">
                        <i className="fas fa-phone"></i> {contacto.phone}
                    </p>
                    
                    {/* Correo electrónico del contacto */}
                    <p className="emailContacto card-text">
                        <i className="fas fa-at"></i> {contacto.email}
                    </p>
                </div>

                {/* Sección para los botones de editar y borrar */}
                <div className="botonesModificar col-3">
                    {/* Botón para editar el contacto */}
                    <button className="botonEditar" onClick={onEdit}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                    
                    {/* Botón para borrar el contacto */}
                    <button className="botonBorrar" onClick={onDelete}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Exporta el componente ContactCard para que pueda ser usado en otros archivos
export default ContactCard;
