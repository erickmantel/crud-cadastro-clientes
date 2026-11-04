//preciso importar acesso ao dom pra conectar os valores dos inputs na camada de serviço 

export const validateEmail = (email) => {
    //const inputEmail = document.getElementById('email'); isso aqui já está no parametro do validateEmail
    const moldeEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailValor = inputEmail.value.trim();

    /*if (moldeEmail.test(emailValor)) {
        inputEmail.setCustomValidity('');  
        return true;
    } else {
        let inputEmail = document.getElementById('email');
        inputEmail.setCustomValidity('Por favor, insira um endereço de e-mail válido (ex: nome@dominio.com).');
        return inputEmail.reportValidity();
    }*/
};

export const validateName = (nome) => {
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

export const validatePhone = (celular) => {
    return true;
};

export const validateCity = (cidade) => {
    return true;
};

export const isValidForm = () => {
    return validateEmail() && validateName() && validatePhone() && validateCity();
};