<template>
    <h1>Rechercher une voiture</h1>
    <div>
        <label>Marques: </label>
        <MultiSelect v-model="selectedBrands" :options="brands" optionLabel="name" placeholder="Selection marque" />
        <Button>Rechercher</Button>
    </div>
    <div>

    </div>
</template>
<script>
import MultiSelect from 'primevue/multiselect';
import { brandsMixin } from '../../../mixins/BrandsMixin';
import {getBrands} from '../../../services/BrandService';

export default {
    components:{
        MultiSelect
    },
    mixins:[brandsMixin],
    data(){
        return {selectedBrands:[]};
    },
    /*mounted(){
        getBrands().then(data =>{
            this.brands = data;
        }).catch(err =>{
            alert(err.message);
        });
    }*/
}
</script>