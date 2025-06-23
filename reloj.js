function actualizarHora() {
  const ahora = new Date();
  const opciones = {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  document.getElementById('fechaHora').textContent =
    ahora.toLocaleDateString('es-ES', opciones);
}

setInterval(actualizarHora, 1000);
actualizarHora();
