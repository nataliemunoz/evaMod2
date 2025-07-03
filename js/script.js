// script.js

$(document).ready(function () {
  // Validación del formulario de contacto
  $('#contactoForm').on('submit', function (e) {
    e.preventDefault();
    const nombre = $('#nombre').val().trim();
    const correo = $('#correo').val().trim();
    const mensaje = $('#mensaje').val().trim();

    if (nombre && correo && mensaje) {
      $('#alerta').removeClass('d-none').addClass('show');
      $('#contactoForm')[0].reset();
    } else {
      alert('Por favor completa todos los campos del formulario.');
    }
  });

  // Evaluación del test
  $('#testForm').on('submit', function (e) {
    e.preventDefault();
    const p1 = $('input[name="p1"]:checked').val();
    const p2 = $('input[name="p2"]:checked').val();

    let correctas = 0;
    if (p1 === 'correcto') correctas++;
    if (p2 === 'correcto') correctas++;

    let mensaje = `Obtuviste ${correctas}/2 respuestas correctas.`;
    if (correctas === 2) {
      mensaje += " ✨¡Excelente! Tienes buenos conocimientos de seguridad.";
    } else if (correctas === 1) {
      mensaje += " ⚠¡Atención! Aún puedes mejorar.";
    } else {
      mensaje += " ❌ Necesitas informarte mejor para protegerte en línea.";
    }

    $('#resultadoTest').html(mensaje);
  });
});
