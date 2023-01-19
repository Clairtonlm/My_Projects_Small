const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event)=>{

    event.preventDefault();
    //verificar se o nome estar Vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha seu nome")
        return;
    }
// se o Emil estar preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        validatePassword 
        return;
    }

// Verificar Senha se esta preenchida
    if(!validatePassword(senhaInput.value, 8)){
        alert("A senha precisa ser no mínimo 8 dígitos")
    }
// Verificar se a situação foi selecionada
if(jobSelect.value === ""){
    alert("Por favor, selecione a sua situação")
    return;
}
// Verificar se a mensagem estar preenchida
if(messageTextarea.value === ""){
    alert("Por favor, deixe sua mensagem!")
    return;
}

// Se todos os campos estiverem corretamente preenchidos , envie o form
form.submit();
});

// função que valida email
function isEmailValid(email){
    //Criar uma REGEX para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

//Função que valida a senha
function validatePassword (senha, minDigits){
    if(senha.length >= minDigits){
        //senha valida
        return true;
    }
    //senha invalida
    return false;
}