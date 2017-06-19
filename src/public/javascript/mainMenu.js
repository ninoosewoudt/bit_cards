/**
 * Created by ninoosewoudt on 12/06/2017.
 */
import Scene from './scene';
class MainMenu extends Scene {


    constructor() {
        super();
        this.setup();
    }


    setup() {
        this.fox = new PIXI.Sprite(
            PIXI.loader.resources["public/images/fox.png"].texture);
        this.scene.addChild(this.fox);
    }


}

export default MainMenu;