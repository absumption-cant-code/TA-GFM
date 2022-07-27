/**
 * This file is the entry point for th dealer-app and is not required to test the systems present.
 * I'd reccommend utilizing the tests I provided, however this file satisfies the request for a component that "actually runs"
 */

import Dealer from './dealer'
import Card from './card'

let testDealer: Dealer = new Dealer();
let testDeck: Array<Card> = testDealer.deck;
let testShuffledDeck: Array<Card> = testDealer.shuffleDeck();
let testVisualizationOfHands: string = testDealer.visualizeHands();

console.log('Deck prior to shuffling: ', testDeck);
console.log('Deck after shuffling: ', testShuffledDeck);
console.log(testVisualizationOfHands)