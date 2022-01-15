import Card from '../../models/Card.js'

let sampleCardData =  [
    new Card(
        "1c7a1783-c0ec-44a2-a577-d5ce15e7c12a",
        "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_210-2x.jpg",
        "Basic",
        "Skitty",
        "60",
        "colorless",
        "Evolving Skies",
        [{
            name: "Whimsy Tackle",
            energyRequired: ['colorless'],
            damage: 30,
            description: ""
        }]
    ), 
    new Card(
        "21bbc260-130f-4d40-aeb2-c58a5c37ff96",
        "https://tcg.pokemon.com/assets/img/expansions/fusion-strike/cards/en-us/SWSH08_EN_206-2x.jpg",
        "Basic",
        "Snorlax",
        "160",
        "colorless",
        "Evolving Skies",
        [{
            name: "Heavy Impact",
            energyRequired: ['colorless', 'colorless', 'colorless'],
            damage: 80,
            description: ""
        }]
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
        "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_167-2x.jpg",
        "Basic",
        "Leafeon V",
        "200",
        "grass",
        "Evolving Skies",
        [{
            name: "Leaf Blade",
            energyRequired: ['grass', 'colorless', 'colorless'],
            damage: "90+",
            description: "Flip a coin. If heads, this attack does 60 more damage."
        }]
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
        "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_192-2x.jpg",
        "Basic",
        "Dragonite V",
        "230",
        "dragon",
        "Evolving Skies",
        [{
            name: "Shred",
            energyRequired: ['colorless', 'colorless'],
            damage: "50",
            description: "This attack's damage isn't affected by any effects on your opponent's Active Pokemon."
        },
        {
            name: "Dragon Gale",
            energyRequired: ['water', 'water', 'lightning'],
            damage: "250",
            description: "This attack also does 20 damage to each of your Benched Pokemon. (Don't apply weakness and Resistance for Benched Pokemon)."
        }]
    ),
    new Card(
        "800d035-bd41-48e4-9116-d1c26780f0d3",
        "https://tcg.pokemon.com/assets/img/expansions/evolving-skies/cards/en-us/SWSH07_EN_198-2x.jpg",
        "Basic",
        "Duraludon V",
        "220",
        "dragon",
        "Evolving Skies",
        [{
            name: "Metal Claw",
            energyRequired: ['fighting', 'metal'],
            damage: "70",
            description: ""
        },
        {
            name: "Breaking Swipe",
            energyRequired: ['fighting', 'metal', 'metal'],
            damage: "140",
            description: "During your opponent's next turn, the Defending Pokemon's attacks do 30 less damage (before applying Weakness and Resistance)."
        }]
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
        "https://i0.wp.com/pkmncards.com/wp-content/uploads/en_US-Promo_SWSH-SWSH183-jolteon_v.jpeg?fit=734%2C1024&ssl=1",
        "Basic",
        "Jolteon V",
        "190",
        "lightning",
        "Evolving Skies",
        [{
            name: "Thunder Spear",
            energyRequired: ['colorless'],
            damage: "",
            description: "This attack does 20 damage to 1 of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)"
        },
        {
            name: "Pin Missle",
            energyRequired: ['lightning', 'colorless', 'colorless'],
            damage: "60x",
            description: "Flip 4 coins. This attack does 60 damage for each heads."
        }]
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

export default sampleCardData