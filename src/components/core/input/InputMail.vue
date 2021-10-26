<template>
    <InputCid type="email" v-model="value"  />
    
</template>

<script>
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import InputCid from "./InputCid.vue"
export default {
    components:{
        InputCid
    },
    data(){
        return{value: ''};
    },
    methods:{
        validate(mail){

        }
    }
}
</script>