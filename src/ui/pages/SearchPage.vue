<template>
    <div class="flex">
      <FilterMenu ref="filterMenu" v-bind:filterOptions="filterOptions"/>
      <div class="mb-10 flex flex-col">
        <div class="flex">
          <button v-on:click="openFilterMenu()" class="mt-10 mr-5 bg-gray-500 rounded-md text-white font-medium py-2 px-4 right">Filters</button>
          <SearchBar class="grow"/>
        </div>
        <NoResults v-show="searchResults.length == 0"/>
        <CardGrid v-bind:cards="searchResults"/>
      </div>
    </div>
</template>

<script>
// Repositories
import searchRepository from '../../data/repository/SearchRepository.js'

// Components
import SearchBar from '../components/SearchBar.vue'
import CardGrid from '../components/CardGrid.vue' 
import NoResults from '../components/NoResults.vue'
import FilterMenu from '../components/FilterMenu.vue'

export default {
  name: 'SearchPage',
  components: {
    SearchBar,
    CardGrid,
    NoResults,
    FilterMenu
  },
  data () {
    return {
        searchResults: []
    }
  },
  inject: ['filterOptions'],
  methods: {
    openFilterMenu
  },
  mounted: function () {
    this.searchResults = searchRepository.search()
  }
}

function openFilterMenu() {
  this.$refs.filterMenu.open()
}
</script>

<style></style>
