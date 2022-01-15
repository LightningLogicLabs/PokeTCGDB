<template>
    <div id="filterMenu" class="fixed top-0 left-0 right-0 bottom-0 w-0 z-40 bg-white transition-[width] overflow-hidden duration-300 ease-in-out">
        <div class="flex bg-zinc-600 h-16 block">
            <h1 class="place-self-center text-white ml-5 text-xl font-medium grow">Filters</h1>
            <img v-on:click="close()" class="place-self-center flex h-1/3 mr-5" src="../../assets/close.svg"/>
        </div>
        <div class="absolute top-16 bottom-0 overflow-x-hidden w-full">
            <div class="m-5">
                <h1 class="text-lg font-semibold mb-5 truncate">Sets</h1>
                <div class="flex" v-for="set in filterOptions.sets" :key="set">
                    <input class="mr-2 place-self-center" type="checkbox" value="{{set}}">
                    <p class="text-base font-medium w-full truncate">{{set}}</p>
                </div>
            </div>
            <hr/>
            <div class="m-5">
                <h1 class="text-lg font-semibold mb-5 truncate">Card Type</h1>
                <div class="flex" v-for="cardType in filterOptions.cardTypes" :key="cardType">
                    <input class="mr-2 place-self-center" type="checkbox" value="{{cardType}}">
                    <p class="text-base font-medium truncate">{{cardType}}</p>
                </div>
            </div>
            <hr/>
            <div class="m-5">
                <h1 class="text-lg font-semibold mb-5 truncate">Energy Type</h1>
                <div class="flex" v-for="energyType in filterOptions.energyTypes" :key="energyType">
                    <input class="mr-2 place-self-center" type="checkbox" value="{{energyType}}">
                    <p class="text-base font-medium truncate">{{energyType}}</p>
                </div>
            </div>
            <hr/>
            <div class="m-5">
                <h1 class="text-lg font-semibold mb-5 truncate">Rarity</h1>
                <div class="flex" v-for="rarity in filterOptions.rarities" :key="rarity">
                    <input class="mr-2 place-self-center" type="checkbox" value="{{rarity}}">
                    <p class="text-base font-medium truncate">{{rarity}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FilterMenu',
    props: {
        filterOptions: Object
    },
    methods: {
        open,
        close
    }
}

function open() {
    let filterMenuClassList = document.getElementById("filterMenu").classList
    filterMenuClassList.remove("w-0")
    filterMenuClassList.add("w-96")
}

function close() {
    let filterMenuClassList = document.getElementById("filterMenu").classList
    filterMenuClassList.remove("w-96")
    filterMenuClassList.add("w-0")
}
</script>

<style scoped>

</style>
