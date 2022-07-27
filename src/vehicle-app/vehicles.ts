// Classes

/**
 * An abstract vehicle class intended to be extended by specific vehicle types
 * @abstract @readonly
 * @member { Function(): void } start - Starts the vehicle and prints out information about its properties
 * @member { Function(): number } getWeight - Returns the current weight of the vehicle
 * @returns Vehicle
 */
abstract class Vehicle {
    public abstract getWeight(): number;
    public abstract start(): void;
}

/**
 * The car vehicle class that represents all vehicles with the typeof 'Car'
 * @public @readonly
 * @extends Vehicle
 * @member { number } weight - The weight of the car
 * @returns Car
 */
export class Car extends Vehicle {
    private weight: number = 100;

    /**
     * Starts the vehicle and prints out its weight and type
     * @public
     * @example Car.start();
     * @returns void
     */
    public start(): void { return console.log(`Vroom I'm a car and I weigh ${this.weight}`) };

    /**
     * Returns the vehicle member weight
     * @public
     * @example Car.getWeight();
     * @returns number
     */
    public getWeight(): number {
        return this.weight
    };
}

/**
 * The truck vehicle class that represents all vehicles with the typeof 'Truck'
 * @public @readonly
 * @extends Vehicle
 * @member { number } weight - The weight of the truck
 * @returns Truck
 */
export class Truck extends Vehicle {
    private weight: number = 200;

    /**
     * Starts the vehicle and prints out its weight and type
     * @public
     * @example Truck.start();
     * @returns void
     */
    public start(): void { return console.log(`Vroom I'm a truck and I weigh ${this.weight}`) };

    /**
     * Returns the vehicle member weight
     * @public
     * @example Truck.getWeight();
     * @returns number
     */
    public getWeight(): number {
        return this.weight
    };
}