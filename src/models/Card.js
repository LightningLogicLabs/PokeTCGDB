export default class Card {
    
    constructor(
        id, 
        img, 
        variant, 
        name, 
        hp,
        type, 
        pack,
        attacks,
        cardRule,
        weakness,
        resistance,
        retreatCost,
        cardNumber,
        rarity,
        illustrators
    ) {
        this.id = id
        this.img = img
        this.variant = variant
        this.name = name
        this.hp = hp
        this.type = type
        this.pack = pack
        this.attacks = attacks
        this.cardRule = cardRule
        this.weakness = weakness
        this.resistance = resistance
        this.retreatCost = retreatCost
        this.cardNumber = cardNumber
        this.rarity = rarity
        this.illustrators = illustrators
    }
}