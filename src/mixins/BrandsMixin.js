import { getBrands } from '../services/BrandService';

export const brandsMixin = {
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