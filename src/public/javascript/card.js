
class Card {
    constructor(container, imagePath, x, y, health, damage, movement) {
        this.image = PIXI.Sprite.from(imagePath);
        this.image.renderable = false;
        this.image.x = x;
        this.image.y = y;
        this.imagePath = imagePath;
        this.movingLeft = false;
        this.health = health;
        this.damage = damage;
        this.dead = false;
        this.movement = movement;
        this.gridX = 0;
        this.gridY = 0;
        this.setupText();
        container.addChild(this.image);
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("im dead");
            this.image.renderable = false;
            this.dead = true;
            return true;
        }
        this.healthText.text = this.health.toString();
        return false;

    }

    setupText() {
        this.damageText = new PIXI.Text(this.damage.toString(), {
            fontFamily: 'Snippet',
            fontSize: 24,
            fill: 'white',
            align: 'left'
        });
        this.damageText.x = 28;
        this.damageText.y = 358;
        this.healthText = new PIXI.Text(this.health.toString(), {
            fontFamily: 'Snippet',
            fontSize: 24,
            fill: 'white',
            align: 'left'
        });
        this.healthText.x = 206;
        this.healthText.y = 358;
        this.image.addChild(this.damageText);
        this.image.addChild(this.healthText);
    }

    setDrawPosition(x, y) {
        this.image.renderable = true;
        this.image.x = x;
        this.image.y = y;
    }

    setGridPosition(x, y) {
        this.gridX = x;
        this.gridY = y;
    }

    setScaling(scaleX, scaleY) {
        this.image.scale.x = scaleX;
        this.image.scale.y = scaleY;
    }

    discard() {
        this.image.renderable = false;
    }
}
export default Card;

