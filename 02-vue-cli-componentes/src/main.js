import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
//filtro genérico
Vue.filter('capitalize', function (value) {
  console.log(value);
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() +
      value.slice(1)
});

Vue.filter('sumaParametros', function (value,arg1,arg2) {
  console.log(value);
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() +
      value.slice(1) + arg1 +arg2;
});

new Vue({
  render: h => h(App),
}).$mount('#app');
