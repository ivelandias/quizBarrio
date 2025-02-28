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

var polygonCoordinates = [
    [4.616543790581179, -74.15592377911334],
    [4.617174744172287, -74.15265145173021],
    [4.614287332917269, -74.15344541302174],
    [4.61229607971244, -74.15575248100022],
    [4.61043532366917, -74.15811283928944],
    [4.612317491604283, -74.15974361654307]
];

// Crea el polígono y agrégalo al mapa
var polygon = L.polygon(polygonCoordinates, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5
}).addTo(map);

// Ajusta la vista del mapa para encajar el polígono
map.fitBounds(polygon.getBounds());
// Generar 20 puntos simulando árboles dentro del polígono

