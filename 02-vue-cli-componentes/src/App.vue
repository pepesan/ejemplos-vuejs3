<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Componente/>
    <Componente/>
    <Parametros param1="valor" contador ="0"></Parametros>
    <Parametros param1="Otro Valor" contador="12"></Parametros>
    <Eventos/>
    <Directivas></Directivas>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Componente from './components/Componente.vue'
import Parametros from './components/Parametros.vue'
import Eventos from './components/Eventos.vue'
import Directivas from './components/Directivas.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Componente,
    Parametros,
    Eventos,
    Directivas
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
