<template>
<div id="alarms">
<alarm v-for="t in expiredTasks()" :data="t" @remove="removeAlarm"></alarm>
</div>
</template>
<script>
import Alarm from './Alarm.vue'
import { tasks } from '../global'
export default {
name: 'Alarms',
components: {
'alarm': Alarm
},
data: function() {
return {
tasks: tasks
};
},
methods: {
expiredTasks: function() {
return this.tasks.filter(function(t) {
return t.pending && t.date < Date.now();
});
},
removeAlarm: function(a) {
var index = this.tasks.findIndex(function(_a) {
return _a.id === a.id;
});
this.tasks.splice(index, 1);
}
}
}
</script>



<style>
.md-card {
margin-bottom: 10px;
}
</style>