<template>
    <div>
        <h2>Directivas</h2>
        <p><span v-if="seen">Ahora me ves</span></p>
        <div v-if="Math.random() > 0.5">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>
        <ul>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>
        <div>
            <span v-for="n in 10">{{ n }} </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Directivas",
        data: function () {
            return {
                seen: true,
                todos: [
                    {
                        text: "Texto 1"
                    },
                    {
                        text: "Texto 2"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
