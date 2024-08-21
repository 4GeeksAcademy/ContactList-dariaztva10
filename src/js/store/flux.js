const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] // Estado inicial de los contactos
		},
		actions: {
			// Agrega un nuevo contacto
			addContact: (contact) => {
				const store = getStore();
				setStore({
					store: {
						...store,
						contacts: [...store.contacts, contact] // Agrega el nuevo contacto a la lista
					}
				});
			},
			// Actualiza un contacto existente
			updateContact: (id, updatedContact) => {
				const store = getStore();
				setStore({
					store: {
						...store,
						contacts: store.contacts.map(contact =>
							contact.id === id ? updatedContact : contact // Actualiza el contacto si el ID coincide
						)
					}
				});
			},
			// Elimina un contacto
			deleteContact: (id) => {
				const store = getStore();
				setStore({
					store: {
						...store,
						contacts: store.contacts.filter(contact => contact.id !== id) // Filtra el contacto a eliminar
					}
				});
			},

		},
		// Carga datos (actualizar con tu propia lógica de fetch si es necesario)
		loadSomeData: () => {
			// fetch().then().then(data => setStore({ "foo": data.bar }));
		},

	}
};


export default getState;
