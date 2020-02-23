<template>
<div id="task-details">
<md-field>
<label>Title</label>
<md-input v-model="data.title"></md-input>
</md-field>
<md-field>
<label>Description</label>
<md-textarea v-model="data.desc"></md-textarea>
</md-field>
<md-datepicker v-model="data.date" md-immediately>
<label>Due date</label>
</md-datepicker>
</div>
</template>
<script>
export default {
name: "TaskDetails",
props: ["data"]
};
</script>
<style>
</style>