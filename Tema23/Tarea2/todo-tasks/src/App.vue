<template>
<div id="app">
<md-app md-mode="fixed">
<md-app-toolbar class="md-primary" :md-active.sync="showDrawer">
<md-button class="md-icon-button" @click="showDrawer=!showDrawer">
<md-icon>menu</md-icon>
</md-button>
<span class="md-title">My tasks</span>
<div class="md-toolbar-section-end">
<md-button class="md-icon-button" @click="addTask()">
<md-icon>add</md-icon>
</md-button>
</div>
</md-app-toolbar>
<md-app-drawer :md-active.sync="showDrawer">
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
</md-app-drawer>





<md-app-content>
<router-view></router-view>

</md-app-content>
</md-app>

<md-dialog :md-active.sync="addingTask">
<md-dialog-title>Add Task</md-dialog-title>
<md-dialog-content>
<task-details :data="taskToAdd"></task-details>
</md-dialog-content>
<md-dialog-actions>
<md-button class="md-primary" @click="addingTask = false">Cancel</md-button>
<md-button class="md-primary" @click="tasks.push(taskToAdd); addingTask =
false">Accept</md-button>
</md-dialog-actions>
</md-dialog>

<md-bottom-bar md-sync-route>
<md-bottom-bar-item to="/alarms" md-label="Alarms" md-icon="alarm">
</md-bottom-bar-item>
<md-bottom-bar-item to="/tasks" md-label="Tasks" md-icon="list">
</md-bottom-bar-item>
<md-bottom-bar-item to="/search" md-label="Search" md-icon="search">
</md-bottom-bar-item>
</md-bottom-bar>

</div>
</template>
<script>
import TaskDetails from './components/TaskDetails.vue'
import { tasks } from './global'
export default {
name: 'App',
components: {
'TaskDetails': TaskDetails
},
data: function() {
return {
showDrawer: false,
tasks: tasks,
addingTask: false,
taskToAdd: null
};
},
methods:{ addTask: function() {
this.taskToAdd = {
id: this.tasks.nextTaskId++,
title: '',
text:'',
pending: true
};
this.addingTask = true;
}
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