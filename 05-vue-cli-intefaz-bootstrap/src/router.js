import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Interfaz from "./views/Interfaz";
import Animaciones from "./views/Animaciones";
import Datatable from "./views/Datatable";
import Formulario from "./views/Formulario";
import Form2 from "./views/Form2";
import Peticiones from "./views/Peticiones";
import VuexDemo from "./views/VuexDemo";
import Modales from "./views/Modales";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/interfaz',
      name: 'interfaz',
      component: Interfaz
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: Datatable
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
    {
      path: '/form2',
      name: 'form2',
      component: Form2
    },
    {
      path: '/modales',
      name: 'modales',
      component: Modales
    },
    {
      path: '/vuexdemo',
      name: 'vuexdemo',
      component: VuexDemo
    },
    {
      path: '/peticiones',
      name: 'peticiones',
      component: Peticiones
    },
    {
      path: '/animaciones',
      name: 'animaciones',
      component: Animaciones
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
