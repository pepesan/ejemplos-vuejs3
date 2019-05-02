<template>
    <div>
        <h2>Detalle</h2>
        <p>{{form.id}}</p>
        <p>{{form.first_name}}</p>
        <p>{{form.last_name}}</p>
        <b-button size="sm" @click="volver" class="mr-1" variant="info">
            Volver
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props:{
            form: Object
        }
    }
</script>

<style scoped>

</style>
