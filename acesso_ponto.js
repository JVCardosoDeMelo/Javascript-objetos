const cliente =  {
    nome : "Andre",
    idade : 32,
    cpf : "1112223345",
    email : "andre@dominioemail.com"
};

console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`os 3 primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`);