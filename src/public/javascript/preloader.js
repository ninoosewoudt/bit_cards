/**
 * Created by ninoosewoudt on 12/06/2017.
 */
import Game from './game';

class PreLoader {

    constructor() {


        PIXI.loader

            .add("public/images/fox.png")
            .load(this.setup.bind(this));


    }


    setup() {
        const game = new Game();
    }

}
export default PreLoader;