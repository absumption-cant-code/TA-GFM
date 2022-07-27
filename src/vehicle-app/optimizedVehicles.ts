// I decided to forgo documentation here as it's such a small class & file that I didn't really think it was neccessary, its also relatively self explanatory imo :)

// Classes

abstract class Vehicle {
    protected weight: number = 0;

    public getWeight(): number { return this.weight };
    public start(): void { return console.log(`Vroom I'm a ${this.constructor.name} and I weigh ${this.weight}`) };
}

export class Car extends Vehicle { protected weight: number = 100 };
export class Truck extends Vehicle { protected weight: number = 200 };