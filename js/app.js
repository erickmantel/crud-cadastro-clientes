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

//mecanismo debounce recursivo
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}




document.getElementById('email').addEventListener('input', debounce(() => {
    document.getElementById('email')
}, ));

document.getElementById('email').addEventListener('blur', () => {
    clearTimeout(tempE)
    validateEmail();
})
