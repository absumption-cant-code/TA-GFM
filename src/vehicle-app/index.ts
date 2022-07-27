/**
 * This file is the entry point for the vehicle-app and is not required to test the systems present.
 * I'd reccommend utilizing the tests I provided, however this file satisfies the request for a component that "actually runs"
 */

import { Car, Truck } from './vehicles'

(new Car).start();
(new Truck).start();