<template>
<div id="app">

<md-app-toolbar class="md-primary">
<md-button class="md-icon-button" @click="showDrawer=!showDrawer">
<md-icon>menu</md-icon>
</md-button>
<span class="md-title">My tasks</span>
</md-app-toolbar>

<md-drawer :md-active.sync="showDrawer">
<md-toolbar class="md-transparent" md-elevation="0">
<span class="md-title">Navigation</span>
</md-toolbar>
<md-list>
<md-list-item to="/alarms" @click="showDrawer=false">
<md-icon>alarm</md-icon>
<span class="md-list-item-text">Alarms</span>
</md-list-item>
<md-list-item to="/tasks" @click="showDrawer=false">
<md-icon>list</md-icon>
<span class="md-list-item-text">Tasks</span>
</md-list-item>
<md-list-item to="/search" @click="showDrawer=false">
<md-icon>search</md-icon>
<span class="md-list-item-text">Search</span>
</md-list-item>
</md-list>
</md-drawer>

<md-app-content>
<router-view></router-view>
</md-app-content>

<div>
<md-app md-mode="fixed" md-waterfall>
...
<md-app-content>
<router-view></router-view>
</md-app-content>
</md-app>
<md-bottom-bar md-sync-route>
<md-bottom-bar-item to="/alarms" md-label="Alarms" md-icon="alarm">
</md-bottom-bar-item>
<md-bottom-bar-item to="/tasks" md-label="Tasks" md-icon="list">
</md-bottom-bar-item>
<md-bottom-bar-item to="/search" md-label="Search" md-icon="search">
</md-bottom-bar-item>
</md-bottom-bar>
</div>
</div>
</template>

<script>
export default {
name: 'App',
data: function() {
return {
showDrawer: false
};
}
}
</script>

<style>
#app {
  height:100vh;
}
</style>
