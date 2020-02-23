<template>
<div id="home">


 <md-field md-clearable>
      <label>Título</label>
      <md-input id="titulo"></md-input>
 </md-field>
 <md-button class="md-raised md-primary" @click="addRoute()" id="btnEmpezar">Empezar Ruta</md-button>
 <md-button class="md-raised md-accent novisible" @click="StopRoute()" id="btnParar" >Parar Ruta</md-button>
 <br/>
<label id="secondsc"></label>

</div>
</template>
<script>
import { routes } from '../global'
import VueColorPickerBoard from 'vue-color-picker-board';
var seconds =0;
var crd = 0;
var idfunction = null;
var routetoadd = null;



export default {
name: 'Home',
components: {
},
data: function() {
return {
routes : routes
};
},
methods:{
addRoute: function() {
routetoadd = {
id: this.routes.nextRouteId++,
title: document.getElementById("titulo").value,
date : new Date(),
pending: false,
ver:true,
positions:[]
}

document.getElementById("btnEmpezar").classList.add("novisible");
document.getElementById("btnParar").className = document.getElementById("btnParar").className.replace(/\bnovisible\b/,'');

var el = document.getElementById('secondsc');
idfunction = setInterval(incrementSeconds, 1000);

function incrementSeconds() {
    var x = document.getElementById("home");
    var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };


     if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function success(pos) {
        crd = pos.coords;

    };

    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    //alert(seconds);
    

    seconds += 1;
    el.innerText = "Grabando " + seconds + " segundos.";
    if(crd.latitude !=undefined && crd.longitude!= undefined){
    var ps = {lat:(crd.latitude+ (0.01 * seconds)), long:(crd.longitude- (0.006 * seconds))}; //simulo movimiento
    routetoadd.positions.push(ps);
   // alert(crd.longitude);
   // alert(crd.latitude);
   }
}
},

StopRoute: function(){
    routes.push(routetoadd);
    clearInterval(idfunction);
    seconds = 0;
document.getElementById("btnEmpezar").className =
    document.getElementById("btnEmpezar").className.replace(/\bnovisible\b/,'');
document.getElementById("btnParar").classList.add("novisible");

}

}
}


</script>



<style>
.md-card {
margin-bottom: 10px;
}

.novisible{
    display:none;
}


</style>