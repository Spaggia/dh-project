window.onload = function()
{
    var map = L.map('map').setView([45.337, -4.285], 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
    ).addTo(map);
    var marker = L.marker([49.36998, -0.87861]).addTo(map);
    marker.bindPopup("Spiaggia di Omaha beach, Normandia, 6 Giugno 1944");
    var marker = L.marker([38.0027632, -4.7694687]).addTo(map);
    marker.bindPopup("Nei pressi di Cerro Muriano, Cordoba, 5 Settembre 1936");
    var marker = L.marker([37.7852205, 14.6004464]).addTo(map);
    marker.bindPopup("Campagne vicino a Troina, Sicilia, 6 Agosto 1943");
}