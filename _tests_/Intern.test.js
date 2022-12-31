const Employee = require("../lib/Employee");

test("creates an Intern instance", () => {
    const intern = new Intern(Jim, 10, 'jimbojumbo@gmail.com', 'UCLA');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

//get school
test('gets intern school', () => {
    const intern = new Intern('Jim', 10, 'jimbojumbo@gmail.com', 'UCLA');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

//getRole() 
test('gets intern role', () => {
    const intern = new Intern('Jim', 10, 'jimbojumbo@gmail.com', 'UCLA');
    expect(intern.getRole()).toEqual("Intern");
});



