<template>
    <div>
        <h2>VuexDemo</h2>
            <h1>Estado</h1>
            <h2>{{$store.state.number}}</h2>
        <p><button @click="inc">Incrementa en 1</button></p>
        <p><button @click="incNumber(2)">Incrementa 2</button></p>
        <p><button @click="setNumber(0)">Resetea</button></p>
        <p><button @click="coge">Coge Valor Asíncronamente</button></p>
        <h2>Listado compartido</h2>
        <p><button @click="mete">Añade un elemento</button></p>
        <div>
            <h2>Listado completo</h2>
            <ul>
                <li v-for="(item,index) in todos" :key="index">{{item.id}}</li>
            </ul>
            <h2>Listado completo con done a true</h2>
            <ul>
                <li v-for="(item,index) in doneTodos" :key="index">{{item.id}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "VuexDemo",
        data () {
            return {
                number: 0,
                todos:[]
            }
        },
        created: function () {
            this.number = this.$store.state.number;
            this.todos = this.$store.state.todos;
            /*
            this.number = this.$store.dispatch('getNumber').then(function (data) {
              return data
            })
            */
        },
        methods:{
            inc: function(){
                this.$store.commit('inc');
            },
            setNumber: function (number) {
                this.$store.commit('setNumber',number);
            },
            incNumber: function (number) {
                this.$store.commit('incNumber',number);
            },
            mete: function () {
                this.$store.commit('push',{id: 4, text:"...",done:true});
            },
            coge: function () {
                this.$store.dispatch('getNumber').then(
                  data => console.log(data)
                );
            }
        },
        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters([
                'doneTodos'
                // ...
            ])
        }
    }
</script>

<style scoped>

</style>
