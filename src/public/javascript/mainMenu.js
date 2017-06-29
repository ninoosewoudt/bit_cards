/**
 * Created by ninoosewoudt on 12/06/2017.
 */
import Scene from './scene';
import Game from './game';
class MainMenu extends Scene {


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

        this.fox = new PIXI.Sprite(
            PIXI.loader.resources["public/images/fox.png"].texture);
        this.scene.addChild(this.fox);
    }


}

export default MainMenu;