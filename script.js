document.addEventListener("DOMContentLoaded", function () {
  // --- Karte initialisieren wie gehabt ---
  const wiesbadenBounds = [
    [49.95, 7.90],
    [50.25, 8.50]
  ];
  const map = L.map("map", {
    center: [50.078217, 8.239761],
    zoom: 13,
    minZoom: 11,
    maxBounds: wiesbadenBounds,
    maxBoundsViscosity: 1.0
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap-Mitwirkende',
  }).addTo(map);

  // --- Custom Icon definieren (falls noch nicht gemacht) ---
  const myPngIcon = L.icon({
    iconUrl:   'assets/Standort_Icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize:   [25, 41],
    iconAnchor: [12, 41],
    popupAnchor:[1, -34],
    shadowSize: [41, 41]
  });

  // --- Marker mit Popup inklusive Bild ---
  L.marker([50.082328, 8.238917], { icon: myPngIcon })
    .addTo(map)
    .bindPopup(
      `
      <div style="text-align:center;">
        <img
          src="assets/LUSH.jpg"
          alt="LUSH Wiesbaden"
          style="width:150px; height:auto; display:block; margin:0 auto 10px;"
        >
        <strong>LUSH Wiesbaden</strong><br>
        Kirchgasse 51<br>
        <a href="https://www.lush.com/de/de?y_source=1_MjM1NTAyOTItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D"
           target="_blank" rel="noopener">Website</a>
      </div>
      `,
      { maxWidth: 200 }
    );
});  // <-- unbedingt hier Schluss-Klammer und Semikolon!