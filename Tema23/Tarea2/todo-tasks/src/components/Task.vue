<template>
<md-list-item :class="{'md-inset': data.pending}">
<md-icon v-if="!data.pending" class="md-primary">check</md-icon>
<div class="md-list-item-text">
<span>{{ data.title }}</span>
<span>{{ formatDate() }}</span>
</div>

<md-menu md-direction="bottom-end">
<md-button class="md-icon-button md-list-action" md-menu-trigger>
<md-icon>more_vert</md-icon>
</md-button>
<md-menu-content>
<md-menu-item v-if="data.pending" @click="data.pending=false">
Complete
</md-menu-item>
<md-menu-item @click="edittingTask = true">Edit</md-menu-item>
<md-menu-item @click="deletingTask = true">Delete</md-menu-item>
</md-menu-content>
</md-menu>

<md-dialog-confirm :md-active.sync="deletingTask"
md-title="Delete task"
md-content="Are you sure?"
md-confirm-text="Yes"
md-cancel-text="No"
@md-cancel="deletingTask = false"
@md-confirm="$emit('remove', data)" />

<md-dialog :md-active.sync="edittingTask">
<md-dialog-title>Edit Task</md-dialog-title>
<md-dialog-content>
<task-details :data="data"></task-details>
</md-dialog-content>
<md-dialog-actions>
<md-button class="md-primary" @click="edittingTask = false">
Close
</md-button>
</md-dialog-actions>
</md-dialog>


</md-list-item>
</template>
<script>
import TaskDetails from "./TaskDetails.vue";
export default {
name: 'Task',
components: {
TaskDetails: TaskDetails
},
props: ['data'],
data: function() {
return {
deletingTask: false,
edittingTask: false
};
},
methods: {
formatDate: function() {
return this.data.date.getDate() + '/' +
(this.data.date.getMonth() + 1) + '/' +
this.data.date.getYear()
}
}
}
</script>

<style>
