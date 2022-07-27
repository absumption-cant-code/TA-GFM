// Dependencies
import DamageType from './damageType'

// Classes

/**
 * An abstract Creature class intended to be extended by specific creature types
 * @abstract @readonly
 * @member { DamageType } weakness - The weakness of that specific creature type
 * @member { Function( type: DamageType ): void } damage - Damage the creature dependent on damage type
 * @returns Creature
 */
export abstract class Creature {
    public abstract weakness: DamageType;
    public abstract damage(type: DamageType): void;
}

/**
 * Troll creature class for all creatures of type, 'Troll'
 * @public @readonly
 * @extends Creature
 * @member { DamageType } weakness - The weakness of the troll
 * @returns Troll
 */
export class Troll extends Creature {
    public weakness: DamageType = DamageType.Ice;

    /**
     * Damages the creature on the condition the provided type is its weakness
     * @public
     * @example Troll.damage(DamageType.Ice);
     * @returns void
     */
    public damage(type: DamageType) {}
}

/**
 * Vampire creature class for all creatures of type, 'Vampire'
 * @public @readonly
 * @extends Creature
 * @member { DamageType } weakness - The weakness of the vampire
 * @returns Vampire
 */
export class Vampire extends Creature {
    public weakness: DamageType = DamageType.Water;

    /**
     * Damages the creature on the condition the provided type is its weakness
     * @public
     * @example Vampire.damage(DamageType.Water);
     * @returns void
     */
    public damage(type: DamageType) {}
}

/**
 * Werewolf creature class for all creatures of type, 'Werewolf'
 * @public @readonly
 * @extends Creature
 * @member { DamageType } weakness - The weakness of the werewolf
 * @returns Werewolf
 */
export class Werewolf extends Creature {
    public weakness: DamageType = DamageType.Silver;

    /**
     * Damages the creature on the condition the provided type is its weakness
     * @public
     * @example Werewolf.damage(DamageType.Silver);
     * @returns void
     */
    public damage(type: DamageType) {}
}