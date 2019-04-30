<template>
    <div>
        <h2>{{message | capitalize}}</h2>
        <h2>{{message | sumaParametros("uno","dos")}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Filtros",
        data: function () {
            return {
                message: 'palabra'
            }
        },
        filters: {
            //filtros específicos por componente
            capitalize: function (value) {
                console.log(value);
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style scoped>

</style>
