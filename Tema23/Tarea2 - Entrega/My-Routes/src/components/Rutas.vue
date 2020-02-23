<template>
<div id="rutas">
<md-tabs>
<md-tab id="tab-all" md-label="All" @click="state='all'">
</md-tab>
<md-tab id="tab-completed" md-label="Invisible" @click="state='Invisible'">
</md-tab>
<md-tab id="tab-pending" md-label="Visible" @click="state='Visible'">
</md-tab>
</md-tabs>
<md-list class="under-tabs">
<ruta v-for="t in filterByState()" :data="t"  @remove="removeRoute"></ruta>
</md-list>
</div>
</template>
<script>
import Ruta from './Ruta.vue'
import { routes } from '../global'
export default {
name: "Rutas",
components: {
'Ruta': Ruta
},
data: function() {
return {

routes: routes,
state: 'all'
};
},
methods: {
filterByState: function() {
var state = this.state;
return this.routes.filter(function(t) {
switch(state) {
case 'all': return true;
case 'Visible': return !t.pending;
case 'Invisible': return t.pending;
default: return false;
}
});

},
removeRoute: function(t) {
var index = this.routes.findIndex(function(_t) {
return _t.id === t.id;
});
this.routes.splice(index, 1);
}
}
}
</script>

<style>
.md-tabs {
position: fixed;
width: 100%;

top: 56px;
left: 0px;
z-index: 1000;
}
.under-tabs {
margin-top: 56px;
}
</style>