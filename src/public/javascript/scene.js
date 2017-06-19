class Scene{

    constructor(){
        this.container = new PIXI.Container();
    }

    get scene(){
        return this.container;
    }

}

export default Scene;