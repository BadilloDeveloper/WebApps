<template>
<div id="map" ref="rawMap">

</div>
</template>
<script>
import { routes } from '../global'


export default {
name: 'Maps',
data() {
return {
map: null
}
},
mounted: function() {
this.loadMap();
this.loadRoutes();
},
methods: {
loadMap: function() {
var rawMap = this.$refs.rawMap;
var latLng = new google.maps.LatLng(37.757545, -4.47432);
let mapOptions = {
center: latLng,
zoom: 6
};
this.map = new google.maps.Map(rawMap, mapOptions);
},
loadRoutes: function() {
var map = this.map;
// fijar datos de prueba
// para cada ruta:
// 1. convertir posiciones a objetos LatLng
// 2. Crear polilínea, ligándola con el mapa
//
routes.forEach(function(route) {
if (route.pending == false){
var positions = route.positions.map(function(pos) {
    // if(route.id>2)
    //  alert("id: "+route.id +" lat: "+route.positions[0].lat + " long: "+ route.positions[0].long);
return new google.maps.LatLng(pos.lat, pos.long);
});
var polyline = new google.maps.Polyline({
path: positions,
map: map,
strokeColor: 'red',
strokeOpacity: 1.0,
strokeWeight: 4
});
}
});
}
}
}
</script>
<style>
#map {
width: 100%;
height: 100%;
}
</style>