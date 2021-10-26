<template>
    <nav>
        <Menubar :model="items">
            <template #items>
                <router-link :to="item.to">{{item.label}}</router-link>
            </template>
            <template #end>
                <router-link to="/login">Se connecter</router-link>
            </template>
        </Menubar>
    </nav>
</template>

<script>
import Menubar from 'primevue/menubar';
export default {
    components:{
        Menubar
    },
    data(){
        return{
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
    }
    
}
</script>