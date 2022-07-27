import DamageType from '../src/creature-app/damageType'
import { Creature, Troll, Vampire, Werewolf } from '../src/creature-app/creatures'

/*
    Overall for this app, there wasn't much room or place to find logical unit tests
*/

describe('abstractCreatureImplementation', (): void => {
    test('extensionsOfCreatureInheritType', (): void => {
        expect(new Troll()).toBeInstanceOf(Creature);
        expect(new Vampire()).toBeInstanceOf(Creature);
        expect(new Werewolf()).toBeInstanceOf(Creature);
    })
})

