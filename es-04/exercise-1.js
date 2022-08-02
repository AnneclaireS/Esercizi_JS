// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {


if (role === 'ceo') {
  const ceoSalary = 2200;
  return ceoSalary;
  
}

else if (role === 'manager') {
  const managerSalary = 1800;
  return managerSalary;
  
}

else if (role === 'cto') {
  const ctoSalary = 1800;
  return ctoSalary;
  
}

else if (role === 'developer') {
  const developerSalary = 1500;
  return developerSalary;
  
}

else if (role === 'other') {
  const otherSalary = 1000;
  return otherSalary;
  
}

}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary); 
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);