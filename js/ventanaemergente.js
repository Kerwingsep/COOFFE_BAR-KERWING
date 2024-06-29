document.addEventListener('DOMContentLoaded', function() {
    var abrir1 = document.getElementById('abrir1');
    var abrir2 = document.getElementById('abrir2');
    var abrir3 = document.getElementById('abrir3');
    var abrir4 = document.getElementById('abrir4');
    var overlay = document.getElementById('overlay');
    var poup = document.getElementById('poup');
    var cerrarpopup = document.getElementById('cerrarpopup'); // Corregido el nombre del ID

    abrir1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir recarga de la página
        overlay.classList.add('active');
        poup.classList.add('active');
    });

    abrir2.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir recarga de la página
        overlay.classList.add('active');
        poup.classList.add('active');
    });

    abrir3.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir recarga de la página
        overlay.classList.add('active');
        poup.classList.add('active');
    });

    abrir4.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir recarga de la página
        overlay.classList.add('active');
        poup.classList.add('active');
    });

    cerrarpopup.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir recarga de la página
        overlay.classList.remove('active');
        poup.classList.remove('active');
    });
});