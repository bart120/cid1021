<template>
    <nav>
        <Menubar :model="items">
            <template #items>
                <router-link :to="item.to">{{item.label}}</router-link>
            </template>
            <template #end>
                <div v-if="isConnected">
                    <router-link to="/login">Se connecter</router-link>
                </div>
                <div v-else>
                    Bonjour {{user?.name}}
                    <Button>Se déconnecter</Button>
                </div>
            </template>
        </Menubar>
    </nav>
</template>

<script>
import Menubar from 'primevue/menubar';
import Button from 'primevue/button'
import { mapGetters } from 'vuex';
export default {
    components:{
        Menubar,
        Button
    },
    computed:{
        ...mapGetters(['user', 'isConnected'])
    },
    data(){
        return{
            //user:null,
            items:[
                {
                    label: "Accueil",
                    to: '/'
                },
                {
                    label: "Voitures",
                    //to: '/cars'
                    items:[
                            {
                                label: "Ajouter",
                                to: '/cars/add'
                            },
                            {
                                label: "Voir",
                                to: '/cars/list'
                            },
                            {
                                label: "Rechercher",
                                to: '/cars/search'
                            }
                    ]
                },
            ]
        }
    },
    mounted(){
        console.log(this);
        //this.user = this.$store.getters.user;
        //this.user = JSON.parse(sessionStorage.getItem('USER'));

    }
    
}
</script>