Vue.component('home', {
    template: `
    <div>
    <h1>Mis tareas
    <input type="text" placeholder="Filtro" v-model="filter">
    </h1>
    <tasks :filter="filter"></tasks>
    </div>
    `,
    data: function() {
        return {
            filter: ''
        };
    }
});
Vue.component('add', {
    template: `
    <div>
    <h1><a href="#" @click="$router.back()">&lt; Back</a></h1>
    <input type="text" placeholder="Enter title" v-model="title">
    <button @click="doAccept">Aceptar</button>
    <button @click="$router.back()">Cancelar</button>
    </div>
    `,
    data: function() {
        return {
            tasks: tasks,
            title: ''
        }
    },
    methods: {
        doAccept: function(ev) {
            var task = {
                id: nextTaskId++,
                title: this.title
            };
            this.tasks.push(task);
            this.$router.back();
        }
    }
});
Vue.component('edit', {
    template: `
    <div>
    <h1><a href="#" @click="$router.back()">&lt; Back</a></h1>
    <input type="text" placeholder="Enter title" v-model="title">
    <button @click="doAccept">Aceptar</button>
    <button @click="$router.back()">Cancelar</button>
    </div>
    `,
    props: ['id'],
    data: function() {
        var id = this.id;
        var index = tasks.findIndex(function(t) { return t.id == id; });
        return {
            tasks: tasks,
            title: tasks[index].title
        }
    },
    methods: {
        doAccept: function(ev) {
            var id = this.id;
            var index = tasks.findIndex(function(t) { return t.id == id; });
            this.tasks[index].title = this.title;
            this.$router.back();
        }
    }
});

Vue.component('task', {
    template: `<li v-bind:class="{ pending: data.pending }" >
    {{ data.title }}
    <a href="#" @click="$emit('remove', data)">Eliminar</a>
    </li>`,
    props: ['data']
});

Vue.component('tasks', {
    template: `
    <ul>
    <task v-for="t in doFilter()" :data="t" @remove="doRemove"></task>
    </ul>`,
    props: ['filter'],
    data: function() {
        return {
            tasks: [
                { id: 0, title: 'Tarea 1', pending: false },
                { id: 1, title: 'Tarea 2', pending: true },
                { id: 2, title: 'Tarea 3', pending: false }
            ]
        }
    },
    methods: {
        doRemove: function(ev) {
            var index = this.tasks.findIndex(function(t) {
                return t.id === ev.id;
            });
            this.tasks.splice(index, 1);
        },
        doFilter: function() {
            var text = this.filter ? this.filter.toLowerCase() : '';
            return this.tasks.filter(function(t) {
                return t.title.toLowerCase().indexOf(text) !== -1;
            });
        }
    }
});


var tasks = [];
var nextTaskId = 0;

var routes = [
    { path: '/', component: Vue.component('home') },
    { path: '/home', component: Vue.component('home') },
    { path: '/add', component: Vue.component('add') },
    { path: '/edit/:id', component: Vue.component('edit'), props: true },
    { path: '*', redirect: '/' }
];

var router = new VueRouter({
    routes: routes
});
var app = new Vue({
    el: '#app',
    router: router
});



//app.tasks.push({ id: 3, title: 'Tarea 4', pending: false })