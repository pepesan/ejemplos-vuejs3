<template>
    <div>
        <b-button @click="coge">Get Simple</b-button>
        <b-button @click="postea">Postea</b-button>
        <b-button @click="reset">Reset</b-button>
        <div>{{salida}}</div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Peticiones",
        data: function () {
            return {
                salida: ""
            }
        },
        methods:{
            coge: function () {
                axios.get('http://cursosdedesarrollo.com/pactometro/resultados.json')
                    .then((response) => {
                            this.salida = response.data
                        }, (error) => {
                            console.log(error)
                        })
            },
            postea:function(){
                axios.post('/user', {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            reset: function () {
                this.salida="";
            }
        }
    }
</script>

<style scoped>

</style>
