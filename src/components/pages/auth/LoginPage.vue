<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <InputMail label="Login" title="un titre" 
                v-model="user.login" emptyColor="#FB335B" 
                @status-change="mailChangeStatus" />
        </div>
        <div>
            <InputCid label="Mot de passe" type="password" v-model="user.password" />
        </div>
        <div>
            <Button type="submit">Se connecter</Button>
        </div>
    </form>
    <p>{{usr.name}}</p>
</template>


<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import InputCid from '../../core/input/InputCid.vue';
import InputMail from '../../core/input/InputMail.vue';
export default {
    components:{
        InputText,
        Button,
        InputCid,
        InputMail
    },
    methods:{
        submit(/*event*/){
            //event.preventDefault();
            //console.log('test: ', this.user);
            //appel serveur
            //this.usr = {name: 'Bob', login: this.user.login, token: 'SGSFGDSFGGQSG', role:'admin'};
            //sessionStorage.setItem('USER', JSON.stringify(this.usr));
            this.$store.dispatch('login', this.user.login, this.user.password);

        },
        mailChangeStatus(arg){
            console.log("statut: " + arg);
        }
    },
    data(){
        return {
            user: {
                login: '',
                password: ''
            },
            usr:{}
        }
    }
}
</script>