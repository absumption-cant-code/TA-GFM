import { Car, Truck } from '../src/vehicle-app/vehicles'

describe('vehicleCarTypeImplementation', (): void => {
    let dummyVehicle = new Car();
    let dummyVehicleWeight = dummyVehicle.getWeight();
    let dummyVehicleStartup = dummyVehicle.start();

    test('startMethod', (): void => { expect(dummyVehicleStartup).toBeUndefined() });
    test('getWeightMethod', (): void => {
        expect(dummyVehicleWeight).toStrictEqual(expect.any(Number));
        expect(dummyVehicleWeight).toBeGreaterThan(0);
    })
})

describe('vehicleTruckTypeImplementation', (): void => {
    let dummyVehicle = new Car();
    let dummyVehicleWeight = dummyVehicle.getWeight();
    let dummyVehicleStartup = dummyVehicle.start();

    test('startMethod', (): void => { expect(dummyVehicleStartup).toBeUndefined() });
    test('getWeightMethod', (): void => {
        expect(dummyVehicleWeight).toStrictEqual(expect.any(Number));
        expect(dummyVehicleWeight).toBeGreaterThan(0);
    })
})