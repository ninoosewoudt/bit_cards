/**
 * Created by ninoosewoudt on 19/06/2017.
 */
import Scene from './scene';
import Game from './game';
import Grid from './grid';
import Deck from './deck';
import Hand from './hand';
import Card from './card';
/**
 * Created by ninoosewoudt on 12/06/2017.
 */
class GameScene extends Scene {

    constructor() {
        super();
        this.setup();
    }


    setup() {

        this.background = new PIXI.Sprite(
            PIXI.loader.resources["public/images/menubackground.jpg"].texture);

        this.background.width = Game.rendererwidth;
        this.background.height = Game.rendererheight;

        // add background to stage...
        this.scene.addChild(this.background);

        let grid = new Grid(6, 3, 100, 20);
        this.scene.addChild(grid.container);
        let deck1 = new Deck();
        let deck2 = new Deck();
        let hand1 = new Hand(grid, deck1, 1);
        let hand2 = new Hand(grid, deck2, 2);
        for (let i = 0; i < 54; i++) {
            deck1.addCards(new Card(this.scene, "public/images/waifuu.png", 0, 0, 1, 1, 1));
            deck2.addCards(new Card(this.scene, "public/images/test.png", 0, 0, 1, 1, 1));
        }
        hand1.takeTurn();
        document.addEventListener("turn", () => {
            if (!hand1.isEmpty())
                hand2.takeTurn();
            else if (!hand2.isEmpty())
                hand1.takeTurn();
        });


    }


}

export default GameScene;