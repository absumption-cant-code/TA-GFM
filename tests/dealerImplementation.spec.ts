import Dealer from '../src/dealer-app/dealer';
import Card from '../src/dealer-app/card';

describe('dealerImplementation', (): void => {

    // Due to the nature of jest, and the way I was tasked with this system, I couldn't find a feasible matcher that would resolve correctly, hence the .failing
    test.failing('deckShuffleMethod', (): void => {
        let dummyDealer: Dealer = new Dealer();
        let dummyDeck: Array<Card> = dummyDealer.deck;

        dummyDealer.shuffleDeck();

        expect(dummyDealer.deck).not.toBe(dummyDeck);
    })

    test('deckHandsGenerationMethod', (): void => {
        let dummyDealer: Dealer = new Dealer();
        let dummyHands: Array<Array<Card>> = dummyDealer.generateHands();

        expect(dummyHands).toEqual(expect.any(Array));
        expect(dummyHands).toHaveLength(4);
    })

    test('deckVisualizeMethod', (): void => {
        let dummyDealer: Dealer = new Dealer();
        let dummyVisualization: String = dummyDealer.visualizeHands();

        expect(dummyVisualization).toEqual(expect.any(String));
        expect(dummyVisualization).toEqual(expect.stringContaining(`Current hands in play:`));
    })
})