<template>
    <b-form @submit="onSubmit" @reset="onReset" novalidate>
        <b-form-group
                id="input-group-0"
                label="Identificativo:"
                label-for="input-0"
                description="Identificativo de la persona"
        >

            <b-form-input
                    v-validate
                    :class="{'input': true, 'is-danger': errors.has('id') }"
                    name="id" placeholder="Identificativo"
                    id="input-0"
                    v-model="form.id"
                    type="number"
                    required
            ></b-form-input>

            <span v-show="errors.has('id')" class="help is-danger">{{ errors.first('id') }}</span>

        </b-form-group>
        <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
        >

                <b-form-input
                        v-validate
                        :class="{'input': true, 'is-danger': errors.has('email') }"
                        name="email" placeholder="Email"
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                ></b-form-input>

                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>

        </b-form-group>
        <b-form-group
                id="input-group-2"
                label="Nombre:"
                label-for="input-2"
                description="Nombre del usuario"
        >

            <b-form-input
                    v-validate="'required'"
                    :class="{'input': true, 'is-danger': errors.has('first_name') }"
                    name="first_name" placeholder="Nombre"
                    id="input-2"
                    v-model="form.first_name"
                    type="text"
                    required
            ></b-form-input>

            <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>

        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="errors.items.lenght > 0">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        <p>{{form.email}}</p>
    </b-form>

</template>

<script>

    export default {
        name: "Formulario",
        data() {
            return {
                show:true,
                form: {
                    email:"",
                    id:null,
                    first_name:""
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                console.log(JSON.stringify(this.form));
                console.log(this.errors);
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.id=null;
                this.form.first_name="";
                // Trick to reset/clear native browser form validation state
                /*
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
                */
            }
        }
    }
</script>

<style scoped>

</style>
