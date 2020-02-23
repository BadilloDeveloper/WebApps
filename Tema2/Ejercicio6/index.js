var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 0, title: 'Tarea 1', pending: false },
            { id: 1, title: 'Tarea 2', pending: true },
            { id: 2, title: 'Tarea 3', pending: false }
        ],
        filtered: [],
        filter: ''
    },
    methods: {
        search: function(ev) {
            var text = this.filter.toLowerCase();
            this.filtered = this.tasks.filter(function(t) {
                return t.title.toLowerCase().indexOf(text) !== -1;
            });
        }
    },
    created: function() {
        this.search();
    },
})


app.tasks.push({ id: 3, title: 'Tarea 4', pending: false })