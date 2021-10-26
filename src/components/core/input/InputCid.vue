<template>
    <label>{{this.label}}</label>
    <br >
    <InputText  v-model="value" v-bind="$attrs" :style="style" />
</template>

<script>
import InputText from 'primevue/inputtext'
export default {
    components:{
        InputText
    },
    props:{
        label: String,
        emptyColor: String
    },
    data(){
        return {value: ''};
    },
    computed:{
        style(){
            return this.value =='' ? `border-color:${this.emptyColor}` : '';
        }
    }
}
</script>