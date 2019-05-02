<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Componente/>
    <Componente/>
    <Parametros param1="valor" contador ="0" :param2="parametro"></Parametros>
    <Parametros param1="Otro Valor" contador="12"></Parametros>
    <Eventos/>
    <Directivas></Directivas>
    <Filtros></Filtros>
    <Mixins></Mixins>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Componente from './components/Componente.vue'
import Parametros from './components/Parametros.vue'
import Eventos from './components/Eventos.vue'
import Directivas from './components/Directivas.vue'
import Filtros from './components/Filtros.vue'
import Mixins from './components/Mixins.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Componente,
    Parametros,
    Eventos,
    Directivas,
    Filtros,
    Mixins
  },
  data: function () {
      return {
        parametro: {
          texto: "Hola"
        }
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
