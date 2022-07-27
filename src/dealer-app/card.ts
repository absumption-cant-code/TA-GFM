// Enumerators
/**
 * CardSuite Enumerator that holds all possible card suite values
 * @member Hearts
 * @member Diamonds
 * @member Clubs
 * @member Spades
 */
enum CardSuite {Hearts, Diamonds, Clubs, Spades};

// Classes
/**
 * A class for a standard-issue playing card
 * @public @readonly
 * @member { CardSuite } suite - The suite of the playing card
 * @member { Number } value - The value of the playing card
 * @returns Card
 */
export default class Card {
    public readonly suite: CardSuite | String;
    public readonly value: Number;

    constructor() {
        this.suite = CardSuite[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
        this.value = 0;
    }
}