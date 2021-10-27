import { getBrands } from '../services/BrandService';
import Button from "primevue/button";

export const brandsMixin = {
    components: {
        Button
    },
    data() {
        return { brands: [] };
    },
    mounted() {
        getBrands().then(data => {
            this.brands = data;
        }).catch(err => {
            alert(err.message);
        });
    }
};