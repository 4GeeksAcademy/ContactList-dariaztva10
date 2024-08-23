import React, { useContext } from "react"; // Importa React y useContext para acceder al contexto
import "../../styles/home.css"; // Importa el archivo de estilos específico para este componente
import { useNavigate } from "react-router-dom"; // Importa useNavigate para cambiar de ruta
import { Context } from "../store/appContext"; // Importa el Context para acceder al estado global y las acciones
import ContactCard from "../component/contactCard"; // Importa el componente ContactCard

// Define el componente funcional Home
export const Home = () => {
    // Obtiene el store y las acciones del contexto global
    const { store, actions } = useContext(Context);

    // Inicializa useNavigate para navegar a diferentes rutas
    const navigate = useNavigate();




    // Verifica si store.contacts está definido y es un array
    if (!Array.isArray(store.contacts) || store.contacts.length === 0) {
        return <div className="sinContactos">No hay contactos disponibles.</div>;
    }

    // Función para eliminar un contacto
    const deleteItems = (id) => {
        actions.deleteContact(id); // Llama a la acción para eliminar el contacto con el ID proporcionado
    };

    // Función para editar un contacto
    const editarTexto = (id) => {
        navigate(`/demo/${id}`); // Navega a la ruta de edición del contacto con el ID proporcionado
    };

    return (
        <div className="contenedor row">
            <div className="contactero col-12 mt-5">
                {/* Mapea todos los contactos y renderiza un ContactCard para cada uno */}
                {store.contacts.map((contacto, index) => (
                    <ContactCard
                        key={index} // Usa el índice como clave para cada ContactCard
                        contacto={contacto} // Pasa el contacto actual como prop
                        onDelete={() => deleteItems(contacto.id)} // Pasa la función para eliminar el contacto como prop
                        onEdit={() => editarTexto(contacto.id)} // Pasa la función para editar el contacto como prop
                    />
                ))}
            </div>
        </div>
    );
};
