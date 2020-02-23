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
Visible
</md-menu-item>
<md-menu-item @click="edittingRoute = true">Edit</md-menu-item>
<md-menu-item @click="deletingroute = true">Delete</md-menu-item>
</md-menu-content>
</md-menu>

<md-dialog-confirm :md-active.sync="deletingroute"
md-title="Delete route"
md-content="Are you sure?"
md-confirm-text="Yes"
md-cancel-text="No"
@md-cancel="deletingroute = false"
@md-confirm="$emit('remove', data)" />

<md-dialog :md-active.sync="edittingRoute">
<md-dialog-title>Edit Route</md-dialog-title>
<md-dialog-content>
<routes-details :data="data"></routes-details>
</md-dialog-content>
<md-dialog-actions>
<md-button class="md-primary" @click="edittingRoute = false">
Close
</md-button>
</md-dialog-actions>
</md-dialog>


</md-list-item>
</template>
<script>
import RoutesDetails from "./RoutesDetails.vue";
export default {
name: 'Ruta',
components: {
RoutesDetails: RoutesDetails
},
props: ['data'],
data: function() {
return {
deletingroute: false,
edittingRoute: false
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
