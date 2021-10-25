<template>
    <Nav></Nav>
    <router-view></router-view>
    <footer>&copy; Formation Vue.js</footer>
</template>

<script>
import Nav from './core/Nav.vue'
export default {
    components:{
        Nav
    }
}
</script>