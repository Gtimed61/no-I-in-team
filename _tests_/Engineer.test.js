const Employee = require("../lib/Employee");

test ("creates an Engineer instance", () => {
    const engineer = new Engineer('Joe', 2, 'joesmoe@hotmail.com', 'joesmoe');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
}
);

//getGithub()
test('gets engineer github', () => {
    const engineer = new Engineer('Joe', 2, 'joesmoe@hotmail.com', 'joesmoe');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//getRole()
test('gets engineer role', () => {
    const engineer = new Engineer('Joe', 2, 'joesmoe@hotmail.com', 'joesmoe');
    expect(engineer.getRole()).toEqual("Engineer");
});



