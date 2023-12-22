let ventanaAbierta = null;

function cerrarVentanaEmergente() {
  if (ventanaAbierta) {
    ventanaAbierta.style.display = 'none';
  }
}

function mostrarTexto(nombre, mensaje) {
  event.preventDefault();


  cerrarVentanaEmergente();

  const idVentanaEmergente = `ventanaEmergente${nombre}`;
  const contenidoVentanaEmergente = document.getElementById(idVentanaEmergente);

  if (!contenidoVentanaEmergente.innerHTML.trim()) {
    contenidoVentanaEmergente.innerHTML = `<h3>${nombre}</h3><p>${mensaje}</p>`;
  }

  contenidoVentanaEmergente.style.display = 'block';

  ventanaAbierta = contenidoVentanaEmergente;
}

  