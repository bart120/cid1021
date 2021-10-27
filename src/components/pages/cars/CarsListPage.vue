<template>
    <h1>Liste des voitures</h1>
    <table>
        <thead>
            <tr><th>Modèle</th><th>Prix</th></tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{car.model}}</td>
                <td>{{car.price}} €</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { getCars } from "../../../services/CarService"
export default {
    data(){
        return {cars:[]};
    },
    mounted(){
        getCars().then(data => this.cars = data);
    }
}
</script>