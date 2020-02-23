<template>
<div id="app">
<md-app md-mode="fixed">
<md-app-toolbar class="md-primary" :md-active.sync="showDrawer">
<md-button class="md-icon-button" @click="showDrawer=!showDrawer">
<md-icon>menu</md-icon>
</md-button>
<span class="md-title">My Routes</span>
<div class="md-toolbar-section-end">
</div>
</md-app-toolbar>
<md-app-drawer :md-active.sync="showDrawer">
<md-toolbar class="md-transparent" md-elevation="0">
<span class="md-title">Navigation</span>
</md-toolbar>
<md-list>
<md-list-item to="/alarms" @click="showDrawer=false">
<md-icon>home</md-icon>
<span class="md-list-item-text">Home</span>
</md-list-item>
<md-list-item to="/Rutas" @click="showDrawer=false">
<md-icon>search</md-icon>
<span class="md-list-item-text">Routes</span>
</md-list-item>
<md-list-item to="/map" @click="showDrawer=false">
<md-icon>map</md-icon>
<span class="md-list-item-text">Maps</span>
</md-list-item>
</md-list>
</md-app-drawer>





<md-app-content>
<router-view></router-view>

</md-app-content>
</md-app>



<md-bottom-bar md-sync-route>
<md-bottom-bar-item to="/alarms" md-label="Home" md-icon="home">
</md-bottom-bar-item>
<md-bottom-bar-item to="/Rutas" md-label="Routes" md-icon="search">
</md-bottom-bar-item>
<md-bottom-bar-item to="/Map" md-label="Map" md-icon="map">
</md-bottom-bar-item>
</md-bottom-bar>

</div>
</template>
<script>
import RoutesDetails from './components/RoutesDetails.vue'
import { routes } from './global'
export default {
name: 'App',
components: {
'RoutesDetails': RoutesDetails
},
data: function() {
return {
showDrawer: false,
//addingTask: false,
routetoadd: null
};
}

}

</script>
<style>
.md-app {
height: 100vh;
padding-bottom: 56px;
}
.md-bottom-bar {
position: fixed;
bottom: 0px;
left: 0px;
}
</style>