 export const validateEmail = (email) => {
    const moldeEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/; //formato das regras
    const emailValor = email.value.trim(); //higieni dos dados
    return emailValor.test(moldeEmail) //validação do campo depois de higienizado e passado o parametro de regras pra teste
    

};

export const validateName = (nome) => {
    const moldeNome = /^[A-Za-zÀ-ÿ\s]{3, 120}$}/;
    const nomeValor = inputNome.value.trim()    
};

export const validatePhone = (celular) => {
    return true;
};

export const validateCity = (cidade) => {
    return true;
};



export const isValidForm = (client) => {
    return validateEmail(client.email) &&
           validateName(client.nome) &&
           validatePhone(client.celular) &&
           validateCity(client.cidade);
};