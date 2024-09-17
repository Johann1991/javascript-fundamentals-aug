/**
 * Class representing an employee
 */
class Employee{
    /**
     * Create an employee
     * @param {string} name - The name of the employee
     * @param {number} salaray - The salary of the employee
     */
    constructor(name, salary){
        /**
         * @type {string}
         */
        this.name = name;

        /**
         * @protected
         * @type {number}
         */
        this._salary = salary;
    }

    /**
     * Get the employee's salary
     * @returns 
     */
    getSalary(){
        return this._salary;
    }
}

/**
 * Class representing a manager
 * @extends Employee
 */
class Manager extends Employee{
    /**
     * Create a manager
     * @param {string} name 
     * @param {number} salary 
     * @param {number} bonus 
     */
    constructor(name, salary, bonus){
        super(name, salary);
        /**
         * @protected
         * @type {number}
         */
        this._bonus = bonus;
    }

    /**
     * Get the total compensation of the manager
     * @returns {number} The total compensation (salary + bonus)
     */
    getTotalCompensation(){
        return this._salary + this._bonus;
    }
}

const employee = new Employee("John", 15000);
console.log(employee.getSalary());

const manager = new Manager("Jane", 50000, 5000);
console.log(manager.getTotalCompensation());