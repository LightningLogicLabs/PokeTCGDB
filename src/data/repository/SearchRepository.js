import Card from '../../models/Card.js'

class SearchRepository {

    constructor(axiosClient) {
        this.axiosClient = axiosClient
    }

    search() {
        return [
            new Card(
                "1c7a1783-c0ec-44a2-a577-d5ce15e7c12a",
                "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_210-2x.jpg",
                "Basic",
                "Skitty",
                "60",
                "Colorless"
            ), 
            new Card(
                "21bbc260-130f-4d40-aeb2-c58a5c37ff96",
                "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_206-2x.jpg",
                "Basic",
                "Snorlax",
                "160",
                "Colorless"
            ),
            new Card(
                "c37fccf5-21d2-4bcb-84c8-10267acfbe28",
                "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_242-2x.jpg",
                "Trainer",
                "Skaters' Park",
                "",
                "Stadium"
            ),
            new Card(
                "758c1682-0b2e-4bc7-85c7-9e62462c6a5a",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_167-2x.jpg"
            ),
            new Card(
                "aee2eb67-f6ae-41de-b2c9-600da61f3a36",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_175-2x.jpg"
            ),
            new Card(
                "e3cd5036-0a77-4ad6-b5ff-9ad97ddf7005",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_189-2x.jpg"
            ),
            new Card(
                "6298d035-bd41-48e4-9116-d1c26780f0d3",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_192-2x.jpg"
            ),
            new Card(
                "6298d035-bd41-48e4-9116-d1c26780f0d3",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_198-2x.jpg"
            ),
            new Card(
                "c2a422ab-fdbf-4fd2-91f8-75d8dfbefd00",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_194-2x.jpg"
            ),
            new Card(
                "609f732e-5077-406e-bc5b-1faf00d1b150",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_180-2x.jpg"
            ),
            new Card(
                "709f732e-5088-406e-bc5b-1faf11d1b155",
                "https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_SWSH-SWSH183-jolteon_v.jpeg?fit=734%2C1024&ssl=1"
            ),
            new Card(
                "709f732e-5088-506b-ac5b-1faf11d1b155",
                "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_196-2x.jpg"
            ),
            new Card(
                "789f732e-5088-406e-fc5f-1faf11d1b155",
                "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_255-2x.jpg"
            ),
            new Card(
                "709f732e-5088-406e-bc5b-1fafdd51b155",
                "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_251-2x.jpg"
            ),
        ]
    }
}

const searchRepository = new SearchRepository()

export default searchRepository