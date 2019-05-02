<template>
    <form @submit.prevent="validateBeforeSubmit" novalidate>
        <b-form-group
                id="input-group-0"
                label="Identificativo:"
                label-for="input-0"
                description="Identificativo de la persona"
        >
            <b-form-input
                    v-validate="'required'"
                    :class="{'input': true, 'is-danger': errors.has('id') }"
                    name="id" placeholder="Identificativo"
                    id="input-0"
                    v-model="form.id"
                    type="number"
                    required
            ></b-form-input>
            <i v-show="errors.has('id')" class="fa fa-warning"><font-awesome-icon :icon="['fa', 'exclamation']"  class="icon alt"/></i>
            <span v-show="errors.has('id')" class="help is-danger">{{ errors.first('id') }}</span>
        </b-form-group>
        <b-form-group
                id="input-group-1"
                label="Nombre:"
                label-for="input-1"
                description="Nombre de la persona"
        >
            <b-form-input
                    v-validate="'required|alpha'"
                    :class="{'input': true, 'is-danger': errors.has('first_name') }"
                    name="first_name" placeholder="Nombre"
                    id="input-1"
                    v-model="form.first_name"
                    type="text"
                    required
            ></b-form-input>
            <i v-show="errors.has('first_name')"><font-awesome-icon :icon="['fa', 'exclamation']"  class="icon alt"/></i>
            <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
        </b-form-group>
        <b-form-group
                id="input-group-2"
                label="Apellidos:"
                label-for="input-2"
                description="Apellidos de la persona"
        >
            <b-form-input
                    v-validate="'required|min:4'"
                    :class="{'input': true, 'is-danger': errors.has('last_name') }"
                    name="last_name" placeholder="Apellidos"
                    id="input-2"
                    v-model="form.last_name"
                    type="text"
                    required
            ></b-form-input>
            <i v-show="errors.has('last_name')"><font-awesome-icon :icon="['fa', 'exclamation']"  class="icon alt"/></i>
            <span v-show="errors.has('last_name')" class="help is-danger">{{ errors.first('last_name') }}</span>
        </b-form-group>

        <div class="column is-12">
            <p class="control">
                <b-button type="submit" variant="primary" :disabled="errors.items.lenght > 0">
                    <font-awesome-icon :icon="['fa', 'save']"  class="icon alt"/>Save</b-button>
                <b-button type="reset" variant="danger">
                    <font-awesome-icon :icon="['fa', 'recycle']"  class="icon alt"/>Reset</b-button>
            </p>
        </div>

    </form>
</template>

<script>
    export default {
        name: 'Form2',
        data: () => ({
            email: '',
            name: '',
            phone: '',
            url: '',
            form:{
                id:null,
                first_name:"",
                last_name:""

            }
        }),
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        //alert('Form Submitted!');
                        return;
                    }

                    //alert('Correct them errors!');
                });
            }
        }
    };
</script>

<style scoped>

</style>
