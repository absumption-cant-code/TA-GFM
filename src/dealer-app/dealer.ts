import Card from './card'

// Classes
/**
 * The main class for creating, shuffling, and assigning cards to players.
 * @public @readonly
 * @member { Array<Card> } deck - A standard deck of cards assigned to this dealer
 * @member { Array<Array<Card>> } hands - The hands of the current players
 * @returns Dealer
 */
export default class Dealer {
    public deck: Array<Card>;
    private hands?: Array<Array<Card>>;

    constructor() { this.deck = [...Array(52)].map((_, i) => new Card()) };

    /**
     * Shuffle the current deck of cards assigned to the dealer
     * @public
     * @implements Durstenfeld shuffle algorithm
     * @example Dealer.shuffleDeck();
     * @returns The original deck with shuffled carts
     */
    public shuffleDeck(): Array<Card> {
        for (let originalCardIndex = this.deck.length - 1; originalCardIndex > 0; originalCardIndex--) {
            let shuffledCardIndex: number = Math.floor(Math.random() * (originalCardIndex + 1)) + 1;

            [this.deck[originalCardIndex], this.deck[shuffledCardIndex]] = [this.deck[shuffledCardIndex], this.deck[originalCardIndex]];
        }

        return this.deck
    }

    /**
     * Distribute the current deck into hands based on the number of players provided
     * @public
     * @param { Number } players - The amount of players in the game, aka. the number of hands to generate. Defaults to 4
     * @example Dealer.generateHands(8);
     * @returns All generated hands
     */
    public generateHands(players: Number = 4): Array<Array<Card>> {
        let deck: Array<Card> = this.deck;
        let hands: Array<Array<Card>> = [];

        for (let playerNumber = 1; playerNumber <= players; playerNumber++) {
            let hand: Array<Card> = deck.slice(0, 5);

            deck.splice(0, 5);
            hands.push(hand);
        }
        
        this.hands = hands
        return hands
    }

    /**
     * Retrieves or generates the current hands held by players and visualizes them within a string
     * @public
     * @example Dealer.visualizeHands();
     * @returns A string containing all current hands
     */
    public visualizeHands(): string {
        let deck: Array<Card> = this.deck;
        let hands: Array<Array<Card>> = this.hands ? this.hands : this.generateHands();
        let visualizationString: string = `Current hands in play:\n`;

        hands.every((playerHand: Array<Card>, playerNumber: number): void => {
            visualizationString += `Player ${playerNumber + 1}'s Hand\n${playerHand.map(card => ` ${card.value} of ${card.suite}`).toString()}\n`;
        })

        return visualizationString
    }
}