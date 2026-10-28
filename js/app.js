import {createClient, readClient, updateClient, deleteClient} from './model.js';
import {openModal, closeModal, updateTable} from './view.js';
import {editDelete, saveClient} from './controller.js';
import {validateEmail, validateName, validatePhone, validateCity} from './controller.js';

updateTable();

document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('cancelar').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);
document.querySelector('#tableClient>tbody').addEventListener('click', editDelete);


let tempE;

document.getElementById('email').addEventListener('input', () => {
    const inputEmail = document.getElementById('email');

    inputEmail.setCustomValidity('');

    clearTimeout(tempE);
    
    tempE = setTimeout(() =>{
        validateEmail();
    },500);
})

