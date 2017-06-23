/**
 * Created by ninoosewoudt on 12/06/2017.
 */
import MainMenu from './mainMenu';
import GameScene from './gameScene';

window.app = undefined;

class Game {

    constructor() {
        app = new PIXI.Application();
        document.body.appendChild(app.view);

        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.autoResize = true;
        app.renderer.resize(window.innerWidth, window.innerHeight);
        this.setup();

    }

    setup() {
        this.menuScene = new MainMenu();
        app.stage.addChild(this.menuScene.scene);
        this.menuScene.visible = false;

        this.gameScene = new GameScene();
        app.stage.addChild(this.gameScene.scene);
        this.gameScene.visible = false;

        //Set the game state
        this.state = this.menu;

        //Start the game loop
        this.gameLoop();
    }



    gameLoop() {
        //Loop this function 60 times per second
        requestAnimationFrame(() => this.gameLoop());
        //Update the current game state
        this.state();
        //Render the stage
        app.renderer.render(app.stage);
        //console.log(this.state);
    }


    menu() {
        this.menuScene.visible = true;
        this.gameScene.visible = false;

    }

    static get rendererwidth(){
        return app.renderer.width;
    }
    static get rendererheight(){
        return app.renderer.height;
    }
}

export default Game;