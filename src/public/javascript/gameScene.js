/**
 * Created by ninoosewoudt on 19/06/2017.
 */
import Scene from './scene';
import Game from './game';
import Grid from './grid';
import Deck from './deck';
import Hand from './hand';
import Card from './card';
import SendCard from './sendCard';
/**
 * Created by ninoosewoudt on 12/06/2017.
 */
class GameScene extends Scene {

    constructor() {
        super();
        this.setup();
    }


    setup() {
        this.io = io('http://ninow.nl:443');
        this.io.on("onConnected", (player) => {
            console.log(player);
            this.hand = new Hand(grid, deck1, player + 1, this.io);
        });
        this.background = new PIXI.Sprite(
            PIXI.loader.resources["public/images/menubackground.jpg"].texture);

        this.background.width = Game.rendererwidth;
        this.background.height = Game.rendererheight;

        // add background to stage...
        this.scene.addChild(this.background);

        let grid = new Grid(6, 3, 100, 20);
        this.scene.addChild(grid.container);
        let cards = [];
        cards.push("public/images/sebas.png");
        cards.push("public/images/attackchopper.png");
        cards.push("public/images/karbonkel.png");
        cards.push("public/images/kast.png");
        cards.push("public/images/shenkie.png");
        cards.push("public/images/test.png");
        cards.push("public/images/waifuu.png");

        let deck1 = new Deck();
        for (let i = 0; i < 54; i++) {
            deck1.addCards(new Card(this.scene, cards[Math.random() * cards.length], 0, 0, Math.random() * 3, Math.random() * 3, Math.random() * 2));
        }
        this.io.on("start", () => {
            console.log(this.hand);
            if (this.hand.player === 1)
                this.hand.takeTurn();
        });
        this.io.on("turn", (data) => {
            console.log(data, "card received");
            let card = new Card(this.scene, data.imagePath, 0, 0, data.health, data.damage, data.movement);
            card.index = grid.playedCards.length;
            card.movingLeft = data.movingLeft;
            grid.playedCards.push(card);
            grid.playCard(card, data.gridX, data.gridY);
            grid.takeTurn(data.movingLeft ? 2 : 1, "player");
            console.log("statement is  ", (data.movingLeft ? 1 : 2) == this.hand.player);
            if ((data.movingLeft ? 1 : 2) == this.hand.player) {
                console.log("my turn");
                this.hand.takeTurn();
            }
        });
    }


}

export default GameScene;
