//import {} os elementos dom de input.value

export const validateEmail = () => {
    const inputEmail = document.getElementById('email');
    const moldeEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailValor = inputEmail.value.trim();

    if (moldeEmail.test(emailValor)) {
        inputEmail.setCustomValidity('');
        return true;
    } else {
        let inputEmail = document.getElementById('email');
        inputEmail.setCustomValidity('Por favor, insira um endereço de e-mail válido (ex: nome@dominio.com).');
        return inputEmail.reportValidity();
    }
};

export const validateName = () => {
    const inputNome = document.getElementById('nome');
    const nomeValor = inputNome.value.trim()
    const moldeNome = /^[A-Za-zÀ-ÿ\s]{3, 120}$}/;

    if(nomeValor !== ''){ 
        inputNome.setCustomValidity('');
        return true;
    }else{
        const moldeNome = ;
    }
    
    
};

export const validatePhone = () => {
    return true;
};

export const validateCity = () => {
    return true;
};

export const isValidForm = () => {
    return validateEmail() && validateName() && validatePhone() && validateCity();
};