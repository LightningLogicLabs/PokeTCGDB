<template>
    <NavBar/>
    <RouterView/>
    <SiteFooter/>
</template>

<script> 
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import { RouterView } from 'vue-router'

export default {
    name: 'App',
    props: [],
    components: {
        NavBar,
        RouterView,
        SiteFooter
    }
}
</script>

<style scoped>
</style>
