/**
 * @class Appliance
 * Represents an abstract applicance
 * This class hides the complexity of the internal appliance workings and exposes essential methods only
 */
class Appliance{
    /**
     * Turns on the appliance. This method abstracts the internal workings
     * @abstract
     */
    turnOn(){
        throw new Error('Method turnOn must be implemented')
    }

    /**
     * Turns off the appliance. This method abstracts the internal workings
     * @abstract
     */
    turnOff(){
        throw new Error('Method turnOff must be implemented')
    }
}

/**
 * @class WashingMachine
 * Represents a specific appliance: a washing machine
 * The internal logic of operating a washing machine is abstracted behind simple methods
 */
class WashingMachine extends Appliance{
    /**
     * Turns on the washing machine
     */
    turnOn(){
        console.log('Washing machine is now running.')
    }

    /**
     * Turns on the washing machine
     */
    turnOff(){
        console.log('Washing machine has been turned off.')
    }
}

/**
 * @class Microwave
 * Represents a specific appliance: a microwave
 * The internal logic of operating a microwave is abstracted behind simple methods
 */
class Microwave extends Appliance{
    /**
     * Turns on the microwave
     */
    turnOn(){
        console.log('Microwave is now heating.')
    }

    /**
     * Turns on the microwave
     */
    turnOff(){
        console.log('Microwave has been turned off.')
    }
}

/**
 * Uses an application to turn it on and off, demopnstrating abstraction
 * @param {Appliance} applicance - The appliance to interact with
 */
function operateAppliance(appliance){
    // Simulation of some operation
    appliance.turnOn();
    appliance.turnOff();
}

// Instantiate different appliances
const myWashingMachine = new WashingMachine();
const myMicrowave = new Microwave();

// Using abstraction to operate appliances without knowing the internal details
operateAppliance(myWashingMachine);
operateAppliance(myMicrowave);