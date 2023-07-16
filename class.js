"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // Default constructor or Parameterized constructor (but not both)
    // constructor(){}
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
        Employee.employeeCount += 1;
    }
    static getEmployeeCount() {
        return this.employeeCount;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
Employee.employeeCount = 0;
// Inheritance
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(1, "Mike", "Dunder Mifflin");
let dwight = new Employee(2, "Dwight", "Dunder Mifflin");
console.log(mike.getNameWithAddress());
console.log(dwight.getNameWithAddress());
console.log(Employee.getEmployeeCount());
