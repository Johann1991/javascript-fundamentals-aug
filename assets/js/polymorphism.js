/**
 * @class Device
 * Represents a general device
 */
class Device{
    /**
     * Turns on the device. This method is mean to be overriden
     * @abstract
     */
    turnOn(){
        throw new Error('Method turnOn() must be implemented');
    }
}

/**
 * @class Laptop
 * Represents a laptop device that inherits from device
 */
class Laptop extends Device{
    /**
     * Overrides the turnOn method to turn on a laptop
     */
    turnOn(){
        console.log('Laptop is now powered on.');
    }
}

/**
 * @class Smartphone
 * Represents a laptop device that inherits from device
 */
class Smartphone extends Device{
    /**
     * Overrides the turnOn method to turn on a smartphone
     */
    turnOn(){
        console.log('Smartphone is now powered on.');
    }
}

/**
 * Turn on any device
 * @param {Device} device - The device to turn on
 */

function powerOnDevice(device){
    device.turnOn();
}

// Instantiate different devices
const myLaptop = new Laptop();
const mySmartphone = new Smartphone();

// Using polymorphism to call the same method on different devices
powerOnDevice(myLaptop);
powerOnDevice(mySmartphone);