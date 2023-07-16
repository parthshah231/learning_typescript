class Employee {
    #id: number;
    protected name: string;
    address: string;
    static employeeCount: number = 0;

    // Default constructor or Parameterized constructor (but not both)
    // constructor(){}
    constructor(id: number, name: string, address: string){
        this.#id = id;
        this.name = name;
        this.address = address;
        Employee.employeeCount += 1;
    }

    static getEmployeeCount(): number{
        return this.employeeCount;
    }

    getNameWithAddress(): string{
        return `${this.name} stays at ${this.address}`
    }
}

// Inheritance
class Manager extends Employee {
    constructor(id: number, name: string, address: string){
        super(id, name, address);
    }
}

let mike = new Manager(1, "Mike", "Dunder Mifflin")
let dwight = new Employee(2, "Dwight", "Dunder Mifflin");
console.log(mike.getNameWithAddress());
console.log(dwight.getNameWithAddress());
console.log(Employee.getEmployeeCount());