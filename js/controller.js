import { readClient, deleteClient, createClient, updateClient } from './model.js';
import { openModal, closeModal, updateTable, fillFields, editNameModal } from './view.js';
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
    const clientData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        cidade: document.getElementById('cidade').value
    }
    
    if (isValidForm()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        };
        const index = document.getElementById('nome').dataset.index;
        if (index === 'new') {
            createClient(client);
            updateTable();
            closeModal();
        } else {
            updateClient(index, client);
            updateTable();
            closeModal();
        }
    }
};

