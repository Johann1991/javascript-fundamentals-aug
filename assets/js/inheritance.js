// Define the Animal class (base class)
class Animal{

    // Constructor method to initialize the porperties of the new Animal object
    constructor(name){
        this.name = name; // Property: The name of the animal
        this.gender = gender;
    }

    // Method: A function that describes an action related to the animal
    speak() {
        console.log(`${this.name} makes a sound.`);
    }

    walk(){
        
    }
}

// Defines the Dog class (derived class) that inherits from Animal
class Dog extends Animal{

    // Construuctor method to initialize the properties of a new Dof object
    constructor(name, breed){
        super(name); // Call the parents class's constructor using 'super'
        this.breed = breed;
    }

    // Method: overrides the speak method from the Animal class
    speak(){
        console.log(`${this.name} barks.`)
    }
}

// Creating an object (instance) of the Dog class
const myDog = new Dog('Buddy', 'Golden Retriever');

// Access the properties of the object
console.log(myDog.name);
console.log(myDog.breed);

// Calling the method of the object
myDog.speak();



