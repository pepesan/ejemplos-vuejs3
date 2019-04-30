<template>
    <div>
        <h2>Formulario</h2>
        <div>
            <p><input v-model="message"
                      placeholder="edita me"></p>
            <p>El mensaje es: {{ message }}</p>
        </div>
        <form
                @submit="checkForm"
                action="https://vuejs.org/"
                method="post"
        >

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name</label>
                <input
                        id="name"
                        v-model="name"
                        type="text"
                        name="name"
                >
            </p>
            <p>
                <label for="email">Email</label>
                <input
                        id="email"
                        v-model="email"
                        type="email"
                        name="email"
                >
            </p>
            <p>
                <label for="age">Age</label>
                <input
                        id="age"
                        v-model="age"
                        type="number"
                        name="age"
                        min="0"
                >
            </p>

            <p>
                <label for="movie">Favorite Movie</label>
                <select
                        id="movie"
                        v-model="movie"
                        name="movie"
                >
                    <option>Star Wars</option>
                    <option>Vanilla Sky</option>
                    <option>Atomic Blonde</option>
                </select>
            </p>

            <p>
                <input
                        type="submit"
                        value="Submit"
                >
            </p>

        </form>
    </div>
</template>

<script>
    export default {
        name: "Formulario",
        data: function () {
            return {
                message: "",
                errors: [],
                name: null,
                age: null,
                email: null,
                movie: null
            }
        },
        methods:{
            checkForm: function (e) {
                if (this.name && this.age && this.email && this.validEmail(this.email)) {
                    return true;
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.');
                }
                if (!this.age) {
                    this.errors.push('Age required.');
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }

                e.preventDefault();
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style scoped>

</style>
