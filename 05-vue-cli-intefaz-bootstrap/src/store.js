import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        number: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    modules: {
    },
    mutations: {
        setNumber: function (state, number) {
            state.number = number
        },
        incNumber: function (state, inc) {
            state.number += inc
        },
        inc: function (state) {
            state.number++;
        },
        push: function (state, item) {
            state.todos.push(item);
        }
    },
    actions: {
        getNumber: function () {
            return this.state.number;
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    strict: debug
})
