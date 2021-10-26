<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit">
        <div>
            <label>Login</label>
            <br >
            <InputText />
        </div>

        <div>
            <Button type="submit">Se connecter</Button>
        </div>
    </form>
</template>
<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
export default {
    components:{
        InputText,
        Button
    },
    methods:{
        submit(/*event*/){
            //event.preventDefault();
            console.log('test');
        }
    }
}
</script>