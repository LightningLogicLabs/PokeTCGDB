<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 mt-10 ">
        <router-link :to="{ name: 'cardDetailPage', params: { id: card.id } }" v-for="card in cards" :key="card.id" >
            <img v-bind:src='card.img' v-bind:data-src='card.img' class="w-auto border-md"/>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CardGrid',
    props: {
        cards: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
