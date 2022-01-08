<template>
  <div class="m-auto max-w-7xl px-5 mb-10 flex flex-col min-h-screen">
      <SearchBar/>
      <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 gap-4">
        <DropDownMenu title="Select Card Type" v-bind:options="cardTypes"/>
        <DropDownMenu title="Select Energy Type" v-bind:options="energyTypes"/>
        <DropDownMenu title="Select Variant" v-bind:options="variants"/>
        <DropDownMenu title="Select Pack" v-bind:options="packs"/>
      </div>
      <NoResults v-show="searchResults.length == 0"/>
      <CardGrid v-bind:cards="searchResults"/>
  </div>
</template>

<script>
// Repositories
import searchRepository from '../../data/repository/SearchRepository.js'
import filterOptionsRepository from '../../data/repository/FilterOptionsRepository.js'

// Components
import DropDownMenu from '../components/DropDownMenu.vue'
import SearchBar from '../components/SearchBar.vue'
import CardGrid from '../components/CardGrid.vue' 
import NoResults from '../components/NoResults.vue'

export default {
  name: 'SearchPage',
  components: {
    DropDownMenu,
    SearchBar,
    CardGrid,
    NoResults
  },
  data () {
        return {
            cardTypes: [],
            energyTypes: [],
            variants: [],
            packs: [],
            searchResults: []
        }
    },
    mounted: function () {
      this.cardTypes = filterOptionsRepository.getCardTypeOptions()
      this.energyTypes = filterOptionsRepository.getEnergyTypeOptions()
      this.variants = filterOptionsRepository.getVariantOptions()
      this.packs = filterOptionsRepository.getPackOptions()
      this.searchResults = searchRepository.search()
    }
}
</script>

<style></style>
