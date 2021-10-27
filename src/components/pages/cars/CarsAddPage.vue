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
            <Dropdown v-model="car.brandID" :options="brands" option-label="name" option-value="id" />
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
import {getBrands} from '../../../services/BrandService';
import {insertCar} from '../../../services/CarService';
import { brandsMixin } from '../../../mixins/BrandsMixin';

export default {
    components:{
        Button,
        InputCid,
        Calendar,
        Dropdown
    },
    data(){
        return {car :{}/*, brands:[]*/};
    },
    mixins:[
        brandsMixin
    ],
    methods:{
        submit(){
            console.log(this.car);
            insertCar(this.car).then(data =>{
                alert(`La voiture a été créée avec l'ID ${data.id}`);
            });
        }
    },
    mounted(){
        /*getBrands().then(data =>{
            this.brands = data;
        }).catch(err =>{
            alert(err.message);
        });*/
        alert("mounted");
    }
}
</script>
