const Employee = require("../lib/Employee");

test("creates an Employee instance", () => {
  const employee = new Employee(John, 1, 'wick@yahoo.com');
//expect name
expect(employee.name).toEqual(expect.any(String));
//expect id 
expect(employee.id).toEqual(expect.any(Number));
//expect email
expect(employee.email).toEqual(expect.any(String));
});

//getName()
test('gets employee name', () => {
    const employee = new Employee('John', 1, 'wick@yahoo.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//getId()
test('gets employee id', () => {
    const employee = new Employee('John', 1, 'wick@yahoo.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets employee email', () => {
    const employee = new Employee('John', 1, 'wick@yahoo.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

//getRole() //return employee
test('gets employee role', () => {
    const employee = new Employee('John', 1, 'wick@yahoo.com');
    expect(employee.getRole()).toEqual("Employee");
}
);

