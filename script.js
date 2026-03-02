// Alternância de tema claro/escuro
const btn = document.getElementById("temaBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Simulação de envio do formulário
document.getElementById("formContato")
.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});