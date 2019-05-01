<template>
    <div>
        <h2>Formulario</h2>
        <div>
            <p><input v-model="message"
                      placeholder="edita me" name="message"></p>
            <p>El mensaje es: {{ message }}</p>
        </div>
        <form
                @submit="checkForm"
                action="https://vuejs.org/"
                method="post"
        >

            <p v-if="merrors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in merrors">{{ error }}</li>
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
        <div>
            <h2>Vee Validate</h2>
            <div class="">
                <label class="label" for="email">Email</label>
                <p :class="{ 'control': true }">
                    <input v-validate="'required|email'"
                           :class="{'input': true, 'is-danger': errors.has('email') }"
                           name="email" type="text" placeholder="Email">
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
            <input type="submit" value="Submit"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Formulario",
        data: function () {
            return {
                message: "Dato inicial",
                merrors: [],
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

                this.merrors = [];

                if (!this.name) {
                    this.merrors.push('Name required.');
                }
                if (!this.age) {
                    this.merrors.push('Age required.');
                }
                if (!this.email) {
                    this.merrors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.merrors.push('Valid email required.');
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
