<template>
    <div class="m-auto max-w-7xl px-5 mb-10 mt-10 flex flex-col min-h-screen">
         <img v-bind:src='card.img' v-bind:data-src='card.img' class="w-auto border-md w-2/5"/>
         <h1>{{card.name}}</h1>
         <h1>{{card.variant}}</h1>
         <h1>{{card.type}}</h1>
         <h1>{{card.hp}}</h1>
    </div>
</template>

<script>
export default {
    name: 'CardDetailPage',
    data () {
        return {
            card: {}
        }
    },
    mounted: function () {
        window.scrollTo(0, 0)
        this.card = this.$root.cardDetailsToView
    }
}
</script>

<style></style>
