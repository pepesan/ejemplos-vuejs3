<template>
    
</template>

<script>
    var mixin = {
        data: function () {
            return {
                message: 'hello',
                foo: 'abc',
                bar:"foo"
            }
        },
    };
    export default {
        name: "Mixins",
        mixins: [mixin]
    }
</script>

<style scoped>

</style>
