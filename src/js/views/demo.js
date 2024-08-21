import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom"; //useParams sirve para obtener parámetros de la URL
import { Context } from "../store/appContext"; // El Context sirve para acceder a las acciones y el estado global
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context); // Accede al store y a las acciones del contexto global
	const { contactId } = useParams(); // Obtiene el ID del contacto desde la URL si existe
	const [contact, setContact] = useState({
		fullName: "",
		email: "",
		address: "",
		phone: ""
	}); // Estado local para almacenar los datos del contacto


	useEffect(() => {
		if (contactId) { // Si contactId está presente, significa que estoy editando un contacto existente
			const contactToEdit = store.contacts.find((c) => c.id == contactId) // Busca el contacto en la lista de contactos del store
			if (contactToEdit) {
				setContact(contactToEdit); // Si encuentra el contacto, lo carga en el estado local para editarlo
			}
		}
	}, [contactId, store.contacts]); // Este efecto se ejecuta cuando contactId o store.contacts cambian

	const handleInputChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value, // Actualiza el estado del contacto con el nuevo valor del input
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
		if (contactId) {
			// Si existe el ID, está editando un contacto
			actions.updateContact(contactId, contact); // Llamamos a la acción para actualizar el contacto
		} else {
			// Si no existe el ID, está creando un nuevo contacto
			actions.addContact(contact); // Llamamos a la acción para agregar un nuevo contacto
		}
	};

	return (
		<div className="container">
			<form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
				<div className="col-md-12">
					<label htmlFor="validationCustom01" className="form-label">Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your full name"
						value={contact.fullName}
						onChange={handleInputChange}
						name="fullName"
						id="validationCustom01"
						required />
					<div className="invalid-feedback">
						Please provide a valid full name.
					</div>
				</div>

				<div className="col-md-12">
					<label for="validationCustomUsername" className="form-label">Email</label>
					<div className="input-group has-validation">
						<span className="input-group-text" id="inputGroupPrepend">@</span>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your email"
							name="email"
							id="validationCustomUsername"
							value={contact.email}
							onChange={handleInputChange}
							aria-describedby="inputGroupPrepend"
							required />
						<div className="invalid-feedback" >
							Please choose a valid email.
						</div>
					</div>
				</div>

				<div className="col-md-12">
					<label for="validationCustom03" className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your address"
						value={contact.address}
						onChange={handleInputChange}
						name="address"
						id="validationCustom03"
						required />
					<div className="invalid-feedback">
						Please provide a valid address.
					</div>
				</div>

				<div className="col-md-12">
					<label for="validationCustom05" className="form-label">Phone</label>
					<input
						type="text"
						className="form-control"
						name="phone"
						value={contact.phone}
						onChange={handleInputChange}
						id="validationCustom05"
						required />
					<div className="invalid-feedback">
						Please provide a valid phone.
					</div>
				</div>
				<div className="col-12">

				</div>
				<div className="col-12">
					<button className="btn btn-primary" type="submit">
						{contactId ? "Update Contact" : "Add Contact"} {/* Cambia el texto del botón según si estamos editando o creando */}
					</button>
				</div>
			</form>
			<br />
			<Link to="/">
				<p className="link">or get back to contacts</p>
			</Link>
		</div>
	);
};
