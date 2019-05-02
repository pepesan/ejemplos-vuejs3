<template>
    <div>
        <h1>{{param1}}</h1>
        <h2>{{param2 | json}}</h2>
        <h1>{{contador}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Parametros",
        props:{
            param1: String,
            param2: Object,
            contador: {
                type: String,
                default: "0",
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
