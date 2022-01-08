<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 mt-10 ">
        <img v-on:click="seeCardInfo(card)" v-for="card in cards" v-bind:src='card.img' v-bind:data-src='card.img' :key="card.cardId" class="w-auto border-md"/>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
        cards: Array
    },
    methods: {
        seeCardInfo(card) {
            window.location.href = `/card/${card.cardId}`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
