class Deck {
    constructor() {
        this.handSize = 3;
        this.cards = [];
        this.drawn = 1;
    }

    addCards(card) {
        this.cards.push(card);
    }

    getHand() {
        let hand = [];
        for (let i = 0; i < this.handSize; i++) {
            hand.push(this.cards[this.cards.length - this.drawn]);
            this.drawn++;
        }
        return hand;
    }
}
export default Deck;
