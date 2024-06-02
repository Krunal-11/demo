var map = L.map('map').setView([17.2543, 78.3067], 17); // Set initial view and zoom level
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Add a tile layer (optional)

// Define the corners of your georeferenced image
var corner1 = L.latLng(17.254031, 78.304908); // Bottom left
var corner2 = L.latLng(17.255614, 78.309145); // Top right
var bounds = L.latLngBounds(corner1, corner2);

// Add the georeferenced image as a custom image layer
L.imageOverlay('maps/college.jpg', bounds).addTo(map);
