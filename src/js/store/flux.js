const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] // Estado inicial de los contactos
		},
		actions: {
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/dariaztva")
					.then((response) => {
						if (!response.ok) {
							getActions().crearAgenda()
						} else {
							return response.json()
						}
					}
					)
					.then((data) => {
						console.log(data)
						setStore({ contacts: data.contacts })
					}
					)
					.catch((error) => {
						console.error("Error:", error);
					}
					)

			},
			crearAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/dariaztva", { method: "POST" })
					.then((response) => {

						return response.json()

					}
					)
					.then((data) => {
						getActions().obtenerContactos()
					}
					)
					.catch((error) => {
						console.error("Error:", error);
					}
					)
			},

			// Agrega un nuevo contacto
			addContact: (contact) => {

				fetch("https://playground.4geeks.com/contact/agendas/dariaztva/contacts", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => {

						return response.json()

					}
					)
					.then((data) => {
						getActions().obtenerContactos()
						navigate("/")
					}
					)
					.catch((error) => {
						console.error("Error:", error);
					}
					)
			},
			// Actualiza un contacto existente
			updateContact: (id, updatedContact, navigate) => {
				console.log(updatedContact);

				fetch("https://playground.4geeks.com/contact/agendas/dariaztva/contacts/" + id, {
					method: "PUT",
					body: JSON.stringify(updatedContact),
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => {

						return response.json()

					}
					)
					.then((data) => {
						getActions().obtenerContactos()
						navigate("/")
					}
					)
					.catch((error) => {
						console.error("Error:", error);
					}
					)

			},
			// Elimina un contacto
			deleteContact: (id) => {
				const store = getStore();
				fetch("https://playground.4geeks.com/contact/agendas/dariaztva/contacts/" + id, {
					method: "DELETE",
				})
					.then((response) => {

						if (!response.ok) {
							throw new Error("Error al eliminar el contacto");
						}
						// No intentar convertir a JSON, simplemente manejar la respuesta
						return response;
					}
					)
					.then(() => {
						const updatedContacts = store.contacts.filter(contact => contact.id !== id);
						setStore({ contacts: updatedContacts });

					}
					)

					.catch((error) => {
						console.error("Error:", error);
					}
					)
			},

		},
		// Carga datos (actualizar con tu propia lógica de fetch si es necesario)
		loadSomeData: () => {
			// fetch().then().then(data => setStore({ "foo": data.bar }));
		},

	}
};


export default getState;
