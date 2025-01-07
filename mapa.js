function initMap() {
    const localizacao = { lat: 53.339688, lng: -6.236688 }; 

    const mapa = new google.maps.Map(document.getElementById('mapa-google'), {
        zoom: 15,
        center: localizacao,
    });

    const marcador = new google.maps.Marker({
        position: localizacao,
        map: mapa,
        title: "Localização do Campus",
    });
}

window.onload = initMap;