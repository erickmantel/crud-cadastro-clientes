export const validateEmail = (email) => {
    const emailValor = email.trim();
    if (emailValor.length === 0) return false; //Pop-up informando pra preencher o campo
    const moldeEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return moldeEmail.test(emailValor);  //regex.test(valor)
};

export const validateName = (nome) => {
    const nomeValor = nome.trim()    
    if (nomeValor.length === 0) return false;
    const moldeNome = /^[A-Za-zÀ-ÿ\s]{3,120}$/;
    return moldeNome.test(nomeValor)
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