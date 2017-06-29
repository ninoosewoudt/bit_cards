import SendCard from './sendCard';
class Hand {
    constructor(grid, deck, player, ioConnection) {
        this.io = ioConnection;
        this.player = player;
        if (player === 2)
            this.playOfset = 5;
        else
            this.playOfset = 0;
        this.grid = grid;
        this.deck = deck;
        let canvas = document.getElementById("canvas");
        addEventListener("click", (event) => {
            let clickX = event.clientX - canvas.offsetLeft + window.pageXOffset;
            let clickY = event.clientY - canvas.offsetTop + window.pageYOffset;
            if (!this.isEmpty()) {
                for (let i = 0; i < 3; i++) {
                    if (clickX > this.grid.grid[i][this.playOfset].x &&
                        clickY > this.grid.grid[i][this.playOfset].y &&
                        clickX < this.grid.grid[i][this.playOfset].x + this.grid.grid[i][this.playOfset].width &&
                        clickY < this.grid.grid[i][this.playOfset].y + this.grid.grid[i][this.playOfset].height) {
                        for (let j = 0; j < 3; j++) {
                            if (this.hand[j].active) {
                                if (!grid.checkIfCardCanBePlayed(this.playOfset, i))
                                    return;
                                console.log("card played");
                                this.hand[j].setGridPosition(this.playOfset, i);
                                this.hand[j].active = false;
                                this.hand[j].movingLeft = this.playOfset !== 0;
                                this.io.emit("turn", new SendCard(this.hand[j]));
                                this.emptyHand();
                                return;
                            }
                        }
                    }

                }
                for (let i = 0; i < this.hand.length; i++) {
                    if (clickX > this.hand[i].image.x && clickX < this.hand[i].image.x + this.hand[i].image.width && clickY > this.hand[i].image.y && clickY < this.hand[i].image.y + this.hand[i].image.height) {
                        for (let j = 0; j < 3; j++)
                            this.hand[j].active = false;
                        this.hand[i].active = true;
                    }
                }
            }
        });
    }

    takeTurn() {
        this.hand = this.deck.getHand();
        for (let i = 0; i < 3; i++)
            this.hand[i].setDrawPosition(40 + 250 * i, 500);
    }

    emptyHand() {
        for (let i = 0; i < 3; i++)
        {
            console.log("destroying hand");
            this.hand[i].image.visible = false;
        }
        this.hand = undefined;
    }

    isEmpty() {
        return this.hand === undefined;
    }
}
export default Hand;