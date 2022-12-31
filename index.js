//generate html
const generateHTML = require('./src/generateHTML');

//node
const fs = require('fs');
const inquirer = require('inquirer');

//profiles for team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array for team members
const teamMembers = [];

//prompt for manager
const promptManager = () => {
    console.log('Please build your team');
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager office number!');
                    return false;
                }
            }
        }
    ])
    .then(managerInput => {
        const { managerName, managerId, managerEmail, managerOfficeNumber } = managerInput;
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        teamMembers.push(manager);
        console.log(manager);
        promptTeam();
    })
};

//add employee
const promptTeam = () => {
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members']
        }
    ])
    .then(userChoice => {
        switch (userChoice.memberChoice) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

//prompt for engineer
const promptEngineer = () => {
    console.log('Please enter engineer information');
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer github?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer github!');
                    return false;
                }
            }
        }
    ])
    .then(engineerInput => {
        const { engineerName, engineerId, engineerEmail, engineerGithub } = engineerInput;
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        teamMembers.push(engineer);
        console.log(engineer);
        promptTeam();
    })
};

//prompt for intern
const promptIntern = () => {
    console.log('Please enter intern information');
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the intern id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the intern email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern school?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the intern school!');
                    return false;
                }
            }
        }
    ])
    .then(internInput => {
        const { internName, internId, internEmail, internSchool } = internInput;
        const intern = new Intern(internName, internId, internEmail, internSchool);
        teamMembers.push(intern);
        console.log(intern);
        promptTeam();
    })
};

//build team
const buildTeam = () => {
    fs.writeFileSync
    (path.join(__dirname, './dist/index.html'), generatePage(teamMembers), 'utf-8');
};

//function call to initialize app
promptManager();

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

module.exports = generateHTML;
