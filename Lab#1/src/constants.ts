export const myArr = [1, 2, 3, 4, 5];

export const mySecondArr = myArr.map(array => array * 2);

const Employee = {
  name: "NAME",
  email: "E-MAIL",
  department: "DEPARTMENT",
  startDate: "START-DATE"
}

const { name, email } = Employee

export const Person = {
  name,
  email
}