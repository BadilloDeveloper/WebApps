<template>
<div id="tasks">
<md-tabs>
<md-tab id="tab-all" md-label="All" @click="state='all'">
</md-tab>
<md-tab id="tab-completed" md-label="Completed" @click="state='complete'">
</md-tab>
<md-tab id="tab-pending" md-label="Pending" @click="state='pending'">
</md-tab>
</md-tabs>
<md-list class="under-tabs">
<task v-for="t in filterByState()" :data="t"  @remove="removeTask"></task>
</md-list>
</div>
</template>
<script>
import Task from './Task.vue'
import { tasks } from '../global'
export default {
name: "Tasks",
components: {
'task': Task
},
data: function() {
return {
tasks: tasks,
state: 'all'
};
},
methods: {
filterByState: function() {
var state = this.state;
return this.tasks.filter(function(t) {
switch(state) {
case 'all': return true;
case 'pending': return t.pending;
case 'complete': return !t.pending;
default: return false;
}
});

},
removeTask: function(t) {
var index = this.tasks.findIndex(function(_t) {
return _t.id === t.id;
});
this.tasks.splice(index, 1);
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