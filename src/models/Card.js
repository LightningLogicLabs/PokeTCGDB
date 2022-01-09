export default class Card {
    
    constructor(cardId, img, variant, name, hp, type, pack) {
        this.cardId = cardId
        this.img = img
        this.variant = variant
        this.name = name
        this.hp = hp
        this.type = type
        this.pack = pack
    }
}