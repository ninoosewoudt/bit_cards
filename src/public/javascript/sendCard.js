import Card from './card';
class SendCard {
    constructor(card) {
        this.movingLeft = card.movingLeft;
        this.health = card.health;
        this.damage = card.damage;
        this.dead = card.dead;
        this.movement = card.movement;
        this.gridX = card.gridX;
        this.gridY = card.gridY;
        this.imagePath = card.imagePath;

    }
}

export default SendCard;
