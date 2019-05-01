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
            <i v-show="errors.has('id')" class="fa fa-warning"></i>
            <span v-show="errors.has('id')" class="help is-danger">{{ errors.first('id') }}</span>
        </b-form-group>
        <div class="column is-12">
            <label class="label">Name</label>
            <p class="control has-icon has-icon-right">
                <input name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                <i v-show="errors.has('name')" class="fa fa-warning"></i>
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="label">Phone</label>
            <p class="control has-icon has-icon-right">
                <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
                <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            </p>
        </div>
        <div class="column is-12">
            <label class="label">Website</label>
            <p class="control has-icon has-icon-right">
                <input name="url" v-model="url" v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="Website">
                <i v-show="errors.has('url')" class="fa fa-warning"></i>
                <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
            </p>
        </div>

        <div class="column is-12">
            <p class="control">
                <b-button type="submit" variant="primary" :disabled="errors.items.lenght > 0">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
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
                id:null
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
