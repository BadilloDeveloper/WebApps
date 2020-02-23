Vue.component('tasks', {
    template: `
    <ul>
    
    <li v-for="t in tasks" v-bind:class="{ pending: t.pending }" >
    {{ t.title }}
    </li>
    </ul>`,
    data: function() {
        return {
            tasks: [
                { id: 0, title: 'Tarea 1', pending: false },
                { id: 1, title: 'Tarea 2', pending: true },
                { id: 2, title: 'Tarea 3', pending: false }
            ]
        };
    }
});




var app = new Vue({
    el: '#app',
    data: {
        filter: ''
    }
});


app.tasks.push({ id: 3, title: 'Tarea 4', pending: false })