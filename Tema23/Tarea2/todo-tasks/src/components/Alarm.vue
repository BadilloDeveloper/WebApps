<template>
<md-card md-with-hover>
<md-card-header>
<md-card-header-text>
<div class="md-title">{{ data.title }}</div>
<div class="md-subhead">{{ formatDate() }}</div>
</md-card-header-text>
</md-card-header>
<md-card-content>{{ data.desc }}</md-card-content>
<md-card-actions>
<md-button @click="data.pending = false">complete</md-button>
<md-button @click="deletingTask = true">delete</md-button>
</md-card-actions>
<md-dialog-confirm :md-active.sync="deletingTask"
md-title="Delete task"
md-content="Are you sure?"
md-confirm-text="Yes"
md-cancel-text="No"
@md-cancel="deletingTask = false"
@md-confirm="$emit('remove', data)" />
</md-card>
</template>
<script>
export default {
name: 'Task',
props: ['data'],
data: function() {
return {
deletingTask: false
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
.md-card {
margin-bottom: 10px;
}
</style>