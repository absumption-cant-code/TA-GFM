/**
 * This file is the entry point for the creature-app and is not required to test the systems present.
 */

import DamageType from './damageType'
import { Creature, Troll, Vampire, Werewolf } from './creatures'

let dummyCreature: Creature = new [Troll, Vampire, Werewolf][Math.floor(Math.random() * (2 - 0) + 0)];
let dummyDamage: string = Object.keys(DamageType)[Math.floor(Math.random() * (2 - 0) + 0)];

console.log(`${dummyCreature.constructor.name} has${dummyCreature.weakness === dummyDamage ? '' : ' not'} been damaged by an ${dummyDamage} attack!`);