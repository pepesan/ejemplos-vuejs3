<template>
    <div>
        <div v-if="show_list">
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
                        <div>
                            <b-modal ref="my-modal" hide-footer title="Borrando que es gerundio">
                                <div class="d-block text-center">
                                    <h3>¿Quiere borrar el item?</h3>
                                </div>
                                <b-button class="mt-3" variant="outline-danger" block @click="actualRemove">Sí</b-button>
                                <b-button class="mt-2" variant="outline-warning" block @click="hideModal">Ni de coña!!</b-button>
                            </b-modal>
                        </div>
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
        </div>
        <div id="item-form" v-if="show_form">
            <FormDatatable :form="form"></FormDatatable>
        </div>
        <Detail v-if="show_detail" :form="form"></Detail>
        <!--div v-show="show_detail ">
            <h2>Detalle</h2>
            <p>{{form.id}}</p>
            <p>{{form.first_name}}</p>
            <p>{{form.last_name}}</p>
            <b-button size="sm" @click="volver" class="mr-1" variant="info">
                Volver
            </b-button>
        </div-->
    </div>
</template>

<script>
    import Detail from "./Detail.vue";
    import FormDatatable from "./FormDatatable.vue";

    export default {
        name: "Datatable",
        data() {
            return {
                form:{
                    id:null,
                    first_name:"",
                    last_name:""

                },
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
                show_form: false,
                show_list: true,
                show_detail: false,
                is_editing:false
            }
        },
        methods:{
            create: function(){
                console.log("create");
                this.show_list=false;
                this.form={
                    id: null,
                    first_name:"",
                    last_name:""
                };
                this.is_editing=false;
                this.show_form=true;

            },
            show: function (row) {
                console.log(row.item);
                console.log(row.item.id);
                this.show_list=false;
                this.show_form=false;
                this.form=row.item;
                this.show_detail=true;
            },
            save: function() {
                if(this.is_editing==false){
                    this.items.push({id: 10, first_name: 'John', last_name: 'Doe'});
                }else{
                    //modificar el item en memoria
                    for ( var i =0; i<this.items.length;i++){
                        if(this.items[i].id==this.form.id){
                            this.items[i].first_name=this.form.first_name;
                            this.items[i].last_name=this.form.last_name;
                            break;
                        }
                    }
                }
                this.show_form = false;
                this.show_list = true;
            },
            volver: function(){
              this.show_detail=false;
              this.show_list=true;
              this.show_form=false;
            },
            edit: function (row) {
                console.log(row.item);
                this.form=row.item;
                this.show_list=false;
                this.is_editing=true;
                this.show_form=true;
            },
            remove: function (row) {
                console.log(row.item.id);
                this.form.id=row.item.id;
                this.showModal();
                //borrar el elemento del array
            },
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
            actualRemove(){
                this.hideModal();
                console.log(this.form.id);
                //borrar de verdad
                for (var i=0;i<this.items.length;i++){
                    var item=this.items[i];
                    if(item.id==this.form.id){
                        this.items.splice(i,1);
                        break;
                    }
                }
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
            },
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
            validateBeforeSubmit() {
                    this.$validator.validateAll().then((result) => {
                        if (result) {
                            // eslint-disable-next-line
                            //alert('Form Submitted!');
                            this.items.push(this.form);
                            this.show_form=false;
                            this.show_list=true;
                            return;
                        }

                        //alert('Correct them errors!');
                    });
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        },
        components:{
            Detail,
            FormDatatable
        }
    }
</script>

<style scoped>

</style>
