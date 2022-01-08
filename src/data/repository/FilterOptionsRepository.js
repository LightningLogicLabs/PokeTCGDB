class FilterOptionsRepository {

    constructor(axiosClient) {
        this.axiosClient = axiosClient
    }

    getCardTypeOptions() {
        return [
            "Select Card Type",
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
            "Select Energy Type",
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

    getVariantOptions() {
        return [
            "Select Variant",
            "EX",
            "GX",
            "V",
            "VMAX",
            "MEGA",
            "Tag Team",
            "Basic"
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
            "Prism Rare",
            "Amazing Rare",
            "Classic Collection"
        ]
    }

    getPackOptions() {
        return [
            "Select Pack",
            "Evolving Skies",
            "Fusion Strike",
            "Brilliant Stars",
            "Chilling Reign",
            "Vivid Voltage",
            "Darkness Ablaze"
        ]
    }
}

const filterOptionsRepository = new FilterOptionsRepository()

export default filterOptionsRepository