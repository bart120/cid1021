<template>
    <h1>Ajouter une voiture</h1>
    <form @submit.prevent="submit">
        <div>
            <InputCid type="text" label="Modèle" v-model="car.model" />
        </div>
        <div>
            <InputCid type="number" label="Prix" v-model="car.price" />
        </div>
        <div>
            <label>Mise en circulation</label>
            <br/>
            <Calendar v-model="car.dateOfCirculation" />
        </div>
        <div>
            <label>Marque</label>
            <br/>
            <Dropdown />
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>
<script>
import Button from "primevue/button";
import InputCid from "../../core/input/InputCid.vue";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import axios from 'axios';

export default {
    components:{
        Button,
        InputCid,
        Calendar,
        Dropdown
    },
    data(){
        return {car :{}};
    },
    methods:{
        submit(){
            console.log(this.car);
        }
    },
    mounted(){
        axios.get('https://formation.inow.fr/demo/api/v1/brands');
    }
}
</script>
