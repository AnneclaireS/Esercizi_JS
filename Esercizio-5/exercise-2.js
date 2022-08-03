// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case 'ceo': console.log(`il salario di ${role} è di ${2200}`);
    break;
  }

  switch (role) {
    case 'manager': console.log(`il salario di ${role} è di ${2200}`);
    break;
  }

  switch (role) {
    case 'cto': console.log(`il salario di ${role} è di ${2200}`);
    break;
  }

  switch (role) {
    case 'developer': console.log(`il salario di ${role} è di ${2200}`);
    break;
  }

  switch (role) {
    case 'other': console.log(`il salario di ${role} è di ${2200}`);
    break;
  }

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

