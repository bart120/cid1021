<template>
    <Menubar :model="items"></Menubar>
    <div>
    <router-view></router-view>
    </div>
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
                }
    }
}
</script>