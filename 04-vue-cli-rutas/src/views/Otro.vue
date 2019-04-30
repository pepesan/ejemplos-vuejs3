<template>
    <div>
        <h2>{{id}}</h2>
        <p><button @click="volver">Volver</button> </p>
        <p><button @click="inicio">Inicio</button> </p>
        <p><button @click="navega">Navegar Otro</button> </p>
    </div>
</template>

<script>
    export default {
        name: "Otro",
        data: function(){
          return {
              id: this.$route.params.id
          }
        },
        methods:{
            created: function () {
                console.log(this.$route.params);
            },
            volver: function () {
                this.$router.go(-1);
            },
            inicio: function () {
                this.$router.push({path: "/"});
            },
            navega: function () {
                this.$router.push({ name: 'otro', params: { id: 123 }})
            }
        }
    }
</script>

<style scoped>

</style>
