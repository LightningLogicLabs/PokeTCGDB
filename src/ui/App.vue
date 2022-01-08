<template>
    <NavBar/>
    <Router/>
    <SiteFooter/>
</template>

<script> 
import NavBar from './components/NavBar.vue'
import Router from './Router.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
    name: 'App',
    props: [],
    components: {
        NavBar,
        Router,
        SiteFooter
    }
}
</script>

<style scoped>
</style>
