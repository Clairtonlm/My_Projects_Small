//script.js
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", submitPayment);

function submitPayment(event) {
  event.preventDefault();
  // aqui você pode adicionar lógica para processar o pagamento,
  // como verificar se os campos de formulário foram preenchidos corretamente
  // e enviar os dados do cartão para o seu processador de pagamentos
  alert("Pagamento enviado com sucesso!");
}
