<template>
    <InputCid type="email" v-model="value" v-bind="$attrs"  />
    <p v-if="!valide" style="color:red;">
        Adresse mail invalide
    </p>
</template>

<script>
const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import InputCid from "./InputCid.vue"
export default {
    components:{
        InputCid
    },
    data(){
        return{value: '', valide: true};
    },
    watch:{
        value(newVal, oldVal){
            this.validate(newVal);
        }
    },
    emits:['statusChange'],
    methods:{
        validate(mail){
                if(mail != '' && ! regMail.test(mail)){
                    //console.log('ERREUR');
                    this.$emit('statusChange', false);
                    this.valide = false;
                    return;
                }
            this.valide = true;
            this.$emit('statusChange', true);
        }
    }
}
</script>