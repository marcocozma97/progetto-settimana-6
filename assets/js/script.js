// Toggle dark/light mode.
// Aggiunge/rimuove la classe .dark sul body al click sul bottone "Tema".

const toggle = document.getElementById("toggle-tema");

toggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  // aggiorna il testo del bottone in base allo stato
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "Tema chiaro" : "Tema scuro";
});
