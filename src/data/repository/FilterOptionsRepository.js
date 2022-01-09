class FilterOptionsRepository {

    constructor(axiosClient) {
        this.axiosClient = axiosClient
    }

    getCardTypeOptions() {
        return [
            "Pokemon",
            "Energy",
            "Supporter",
            "Item",
            "Stadium",
            "Tool"
        ]
    }

    getEnergyTypeOptions() {
        return [
            "Grass",
            "Fire",
            "Water",
            "Lightning",
            "Fighting",
            "Psychic",
            "Colorless",
            "Darkness",
            "Metal",
            "Dragon",
            "Fairy"
        ]
    }

    getRarityOptions() {
        return [
            "Common",
            "Uncommon",
            "Rare",
            "Promo",
            "Holo Rare",
            "Ultra Rare",
            "Secret Rare",
            "Shiny Holo Rare",
            "Rare BREAK",
            "Classic Collection",
            "Amazing Rare",
            "Prism Rare"
        ]
    }

    getSetAndExpansionOptions() {
        return [
            "Sword & Shield",
            "Sword & Shield - Rebel Clash",
            "Sword & Shield - Darkness Ablaze",
            "Sword & Shield - Champions Path",
            "Sword & Shield - Vivid Voltage",
            "Sword & Shield - Shining Fates",
            "Sword & Shield - Battle Styles",
            "Sword & Shield - Chilling Reign",
            "Sword & Shield - Evolving Skies",
            "Sword & Shield - Celebrations",
            "Sword & Shield - Fusion Strike",
            "Sword & Shield - Brilliant Stars",
            "Sun & Moon",
            "Sun & Moon - Guardians Rising",
            "Sun & Moon - Burning Shadows",
            "Sun & Moon - Shining Legends",
            "Sun & Moon - Crimson Invasion",
            "Sun & Moon - Ultra Prism",
            "Sun & Moon - Forbidden Light",
            "Sun & Moon - Celestial Storm",
            "Sun & Moon - Dragon Majesty",
            "Sun & Moon - Lost Thunder",
            "Sun & Moon - Team Up",
            "Sun & Moon - Detective Pikachu",
            "Sun & Moon - Unbroken Bonds",
            "Sun & Moon - Unified Minds",
            "Sun & Moon - Hidden Fates",
            "Sun & Moon - Cosmic Eclipse",
            "EX - Ruby & Sapphire",
            "EX - Sandstorm",
            "EX - Dragon",
            "EX - Team Magma vs Team Aqua",
            "EX - Hidden Legends",
            "EX - FireRed & LeafGreen",
            "EX - Team Rocket Returns",
            "EX - Deoxys",
            "EX - Emerald",
            "EX - Unseen Forces",
            "EX - Delta Species",
            "EX - Legend Maker",
            "EX - Holon Phantoms",
            "EX - Crystal Guardians",
            "EX - Dragon Frontiers",
            "EX - Power Keepers"
        ]
    }
}

const filterOptionsRepository = new FilterOptionsRepository()

export default filterOptionsRepository