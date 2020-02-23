var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 0, title: 'Tarea 1', pending: false },
            { id: 1, title: 'Tarea 2', pending: true },
            { id: 2, title: 'Tarea 3', pending: false }
        ],
        filter: ''
    },
    methods: {
        doFilter: function() {
            var text = this.filter.toLowerCase();
            return this.tasks.filter(function(t) {
                return t.title.toLowerCase().indexOf(text) !== -1;
            });
        }
    }
});


app.tasks.push({ id: 3, title: 'Tarea 4', pending: false })