"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.mySecondArr = exports.myArr = void 0;
exports.myArr = [1, 2, 3, 4, 5];
exports.mySecondArr = exports.myArr.map(array => array * 2);
const Employee = {
    name: "NAME",
    email: "E-MAIL",
    department: "DEPARTMENT",
    startDate: "START-DATE"
};
const { name, email } = Employee;
exports.Person = {
    name,
    email
};
