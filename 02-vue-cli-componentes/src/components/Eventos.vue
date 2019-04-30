<template>
    <div>
        <button v-on:click="clickado">Pulsame</button>
        <h2>Dato {{count}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Eventos",
        data: function () {
            return {
                count: 1
            }
        },
        methods:{
            clickado:function (event) {
                //console.log(event.target.innerHTML);
                //console.log (this);
                //console.log (this.count);
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>
