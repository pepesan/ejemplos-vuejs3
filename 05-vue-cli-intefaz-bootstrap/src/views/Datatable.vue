<template>
    <div>
        <h2>Datatable</h2>
        <b-button size="sm" @click="create" class="mr-1" variant="success">
            Create
        </b-button>
        <input v-model="filtro" placeholder="filtro"/>
        <div class="overflow-auto" v-show="!detail">
            <b-table
                    id="my-table"
                    :items="items"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :fields="fields"
                    :filter="filtro"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    small
            >
                <template slot="actions" slot-scope="row">
                    <b-button size="sm" @click="show(row)" class="mr-1" variant="info">
                        Show
                    </b-button>
                    <b-button size="sm" @click="edit(row)" class="mr-1" variant="warning">
                        Edit
                    </b-button>
                    <b-button size="sm" @click="remove(row)" class="mr-1" variant="danger">
                        Delete
                    </b-button>
                </template>
            </b-table>
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="my-table"
                    align="center"
            ></b-pagination>
            <!--p class="mt-3">Current Page: {{ currentPage }}</p-->
        </div>
        <div id="item-form">
            <h2>Formulario</h2>
        </div>
        <div v-show="detail">
            <h2>Detalle</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Datatable",
        data() {
            return {
                detail: false,
                filtro: "",
                perPage: 5,
                currentPage: 1,
                sortBy: 'first_name',
                sortDesc: false,
                fields: [
                    { key: 'id', sortable: true },
                    { key: 'first_name', sortable: true },
                    { key: 'last_name', sortable: true },
                    {key:'actions'}
                ],
                items: [
                    { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                    { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                    { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                    { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                    { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                    { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                    { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                    { id: 8, first_name: 'Mr', last_name: 'Slate' },
                    { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
                ],
                show_form: true
            }
        },
        methods:{
            create: function(){
                console.log("create");
            },
            show: function (row) {
                console.log(row.item);
            },
            edit: function (row) {
                console.log(row.item);
            },
            remove: function (row) {
                console.log(row.item.id);
            },
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.id = null;
                this.form.first_name = '';
                this.form.last_name = '';
                // Trick to reset/clear native browser form validation state
                /*
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                })

                 */
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>

<style scoped>

</style>
