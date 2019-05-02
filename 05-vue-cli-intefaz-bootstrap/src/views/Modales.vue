<template>
    <div>
    <div>
        <b-button id="show-btn" @click="showModal">Open Modal</b-button>
        <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
        </b-modal>
    </div>

    <div>
        <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

        <div class="mt-3">
            Submitted Names:
            <div v-if="submittedNames.length === 0">--</div>
            <ul v-else class="mb-0 pl-3">
                <li v-for="(name,index) in submittedNames" :key="index">{{ name }}</li>
            </ul>
        </div>

        <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Submit Your Name"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
        >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                        :state="nameState"
                        label="Name"
                        label-for="name-input"
                        invalid-feedback="Name is required"
                >
                    <b-form-input
                            id="name-input"
                            v-model="name"
                            :state="nameState"
                            required
                    ></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Modales",
        data() {
            return {
                name: '',
                nameState: null,
                submittedNames: []
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['my-modal'].toggle('#toggle-btn')
            },
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity()
                this.nameState = valid ? 'valid' : 'invalid'
                return valid
            },
            resetModal() {
                this.name = ''
                this.nameState = null
            },
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                // Exit when the form isn't valid
                if (!this.checkFormValidity()) {
                    return
                }
                // Push the name to submitted names
                this.submittedNames.push(this.name)
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                })
            }
        }
    }
</script>

<style scoped>

</style>
