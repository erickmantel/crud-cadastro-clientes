import { readClient, deleteClient, createClient, updateClient } from './model.js';
import { openModal, closeModal, updateTable, fillFields, editNameModal, getClientFormData } from './view.js';
import { isValidForm } from './service.js';

const editClient = (index) => {
    const client = readClient()[index];
    client.index = index;
    editNameModal(client.nome);
    fillFields(client);
    openModal();
};

export const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-');
        if (action == 'edit') {
            editClient(index);
        } else {
            const client = readClient()[index];
            const response = confirm(`Têm certeza que deseja excluir o cliente ${client.nome}?`);
            if (response) {
                deleteClient(index);
                updateTable();
            }
        }
    }
};

export const saveClient = () => {
    const clientData = getClientFormData();  
    if (isValidForm(clientData)) {
        if (clientData.index === 'new') {
            createClient(clientData);
            updateTable();
            closeModal();
        } else {
            updateClient(clientData.index, clientData);
            updateTable();
            closeModal();
        }
    }
};

