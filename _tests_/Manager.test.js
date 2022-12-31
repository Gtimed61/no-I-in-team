const Employee = require("../lib/Employee");

test("creates a Manager instance", () => {
    const manager = new Manager('George', 13, 'curious1@gmail.com', 100);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//get office number
test('gets manager office number', () => {
    const manager = new Manager('George', 13, 'curious1@gmail.com', 100);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

//getRole() //overridden to return Manager
test('gets manager role', () => {
    const manager = new Manager('George', 13, 'curious1@gmail.com', 100);
    expect(manager.getRole()).toEqual("Manager");
});
