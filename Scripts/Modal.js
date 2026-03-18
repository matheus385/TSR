const modal = document.getElementById("modal");
const abrir = document.getElementById("abrirModal");
const fechar = document.getElementById("fecharModal");

// abrir modal
abrir.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "block";
});

// fechar no X
fechar.addEventListener("click", function() {
  modal.style.display = "none";
});

// fechar clicando fora
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});