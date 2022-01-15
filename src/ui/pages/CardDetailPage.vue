<template>
    <div class="mb-10 mt-10">
        <!-- Place Holder -->
        <div class="flex animate-pulse" v-bind:class="{ 'hidden': !loading }">
            <img src="../../assets/pokemon_card_backside.png" class="w-auto border-md w-2/6 mr-10"/>
            <div class="w-full">
                <div class="space-y-5">
                    <div class="grid grid-cols-4">
                        <div class="h-5 bg-zinc-500 rounded col-start-1 col-span-2"></div>
                    </div>
                    <div class="flex-1 h-5 bg-zinc-500 rounded w-36"></div>
                </div>
                <hr class="mt-5 mb-5"/>
                <div class="mb-6 mb-3 space-y-3">
                    <div class="flex-1 h-5 bg-zinc-500 rounded w-40"></div>
                    <div class="flex-1 h-5 bg-zinc-500 rounded w-11"></div>
                </div>
                 <div class="mt-10 mb-3 space-y-3">
                    <div class="flex-1 h-5 bg-zinc-500 rounded w-40"></div>
                    <div class="flex-1 h-5 bg-zinc-500 rounded w-11"></div>
                </div>
                <hr class="mt-5 mb-5"/>
                <div class="mb-3 space-y-3">
                    <div class="grid grid-cols-1">
                        <div class="h-5 bg-zinc-500 rounded col-span-1"></div>
                    </div>
                    <div class="grid grid-cols-3">
                        <div class="h-5 bg-zinc-500 rounded col-span-2"></div>
                    </div>
                    <div class="grid grid-cols-3">
                        <div class="h-5 bg-zinc-500 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Place Holder -->
        <!-- Actual Content -->
        <div class="flex" v-bind:class="{ 'hidden': loading }">
            <img v-bind:src='card.img' v-bind:data-src='card.img' class="w-auto border-md w-2/6 mr-10"/>
            <div class="w-full">
                <div class="flex">
                     <h1 class="text-2xl mb-2">{{card.name}}</h1>
                     <h1 class="text-md ml-auto self-center mb-1" v-if="card.hp != ''">HP</h1>
                     <h1 class="text-2xl ml-1" v-if="card.hp != ''">{{card.hp}}</h1>
                     <img class="w-auto h-min mt-1 ml-3" v-bind:src="getEnergyImage(card.type)"/>
                </div>
                <h1 class="text-lg">{{card.variant}}</h1>
                <hr class="mt-5 mb-5"/>
                <div class="mb-6" v-for="attack in card.attacks" :key="attack">
                    <div class="flex mb-3">
                        <div class="flex" v-for="energy in attack.energyRequired" :key="energy">
                            <img class="h-min mr-1" v-bind:src="getEnergyImage(energy)">
                        </div>
                        <h1 class="ml-2 text-xl">{{attack.name}}</h1>
                        <h1 class="text-xl ml-auto">{{attack.damage}}</h1>
                    </div>
                    <h1>{{attack.description}}</h1>
                </div>
                <hr class="mt-5 mb-5"/>
            </div>
        </div>
        <!-- End Actual Content -->
    </div>
</template>

<script>
import searchRepository from '../../data/repository/SearchRepository.js'

export default {
    name: 'CardDetailPage',
    props: ['id'],
    data () {
        return {
            card: {},
            loading: true
        }
    },
    methods: {
        getEnergyImage(energyType) {
            switch (energyType) {
                case 'lightning': return "https://content.tcgcollector.com/content/images/1b/e4/e8/1be4e8211f0be0a51b792b6c31f34814f03d933feefda27d04b7516b611f3faf.png"
                case 'water': return "https://content.tcgcollector.com/content/images/a6/d1/d1/a6d1d1d31a4470f019db8ea0132c41054cd8c35e295eb3b33d7c849225b7073e.png"
                case 'colorless': return "https://content.tcgcollector.com/content/images/98/fa/64/98fa649102fdbf170a2be997d5ecf2016b2f5f92f372213e9e642f7ed9332993.png"
                case 'fighting': return "https://content.tcgcollector.com/content/images/e7/49/a5/e749a52e91db7e684aa3d595e89badee67a5ebdaf77177977e70a71f76d447db.png"
                case 'metal': return "https://content.tcgcollector.com/content/images/66/ae/d9/66aed9c41d50cf8cee23597eb761a6767cabc73f6c610d54f599c3d2624da37c.png"
                case 'dragon': return "https://content.tcgcollector.com/content/images/73/9f/ff/739fff897f789c085e47b79c223a66045a2bacf6340ae3ab347a7153c2406032.png"
            }
        }
    },
    mounted: function () {
        window.scrollTo(0, 0)
        searchRepository.getCardDetailById(this.id).then((card) => {
            this.card = card
            this.loading = false
        })
    }
}
</script>

<style></style>
