/**
 * Created by ninoosewoudt on 12/06/2017.
 */
import MainMenu from './mainMenu';
import GameScene from './gameScene';


class Game {
    constructor() {
        this.app = new PIXI.Application();
        document.body.appendChild(this.app.view);

        this.app.renderer.view.style.position = "absolute";
        this.app.renderer.view.style.display = "block";
        this.app.renderer.autoResize = true;
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        this.setup();

    }

    setup() {
        this.menuScene = new MainMenu();
        this.app.stage.addChild(this.menuScene.scene);
        this.menuScene.visible = false;

        this.gameScene = new GameScene();
        this.app.stage.addChild(this.gameScene.scene);
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
        this.app.renderer.render(this.app.stage);
        //console.log(this.state);
    }


    menu() {
        this.menuScene.visible = true;
        this.gameScene.visible = false;

    }
}

export default Game;