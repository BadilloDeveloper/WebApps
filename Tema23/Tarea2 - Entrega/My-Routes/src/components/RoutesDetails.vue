<template>
<div id="routes-details">
<md-field>
<label>Title</label>
<md-input v-model="data.title"></md-input>
</md-field>

<label> Visible</label>
<md-switch v-model="data.pending" md-immediately> </md-switch>
<label> Not Visible</label>
<!--<md-field>
 <label>Description</label>
<md-textarea v-model="data.desc"></md-textarea>
</md-field> -->
<md-datepicker v-model="data.date" md-immediately>
<label>Due date</label>
</md-datepicker>
</div>
</template>
<script>
export default {
name: "RoutesDetails",
props: ["data"]
};
</script>
<style>

</style>