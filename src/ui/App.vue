<template>
    <NavBar v-bind:user="user"/>
    <RouterView class="m-auto max-w-7xl px-10 flex-1 w-full"/>
    <SiteFooter/>
</template>

<script> 
// Import Repositories
import userRepository from '../data/repository/UserRepository.js'
import filterOptionsRepository from '../data/repository/FilterOptionsRepository.js'

// Import Components
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import { RouterView } from 'vue-router'

export default {
    name: 'App',
    data () {
        return {
            user: {},
            filterOptions: {},
            cardDetailsToView: {}
        }
    }, 
    components: {
        NavBar,
        RouterView,
        SiteFooter
    },
    provide () {
        return {
            user: this.user,
            filterOptions: this.filterOptions
        }
    },
    mounted: function() {
        this.user = userRepository.getUser()
        this.filterOptions.cardTypes = filterOptionsRepository.getCardTypeOptions()
        this.filterOptions.energyTypes = filterOptionsRepository.getEnergyTypeOptions()
        this.filterOptions.rarities = filterOptionsRepository.getRarityOptions()
        this.filterOptions.sets = filterOptionsRepository.getSetAndExpansionOptions()

    }
}
</script>

<style scoped>
</style>
