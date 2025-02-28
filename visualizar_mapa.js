var map = L.map('map').setView([4.613848880160303, -74.15574139005611], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Agrega los controles de edición geométrica
map.pm.addControls({
    position: 'topleft', // Se corrigió la escritura
    drawCircle: false // Desactiva la herramienta de círculos
});


