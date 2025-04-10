const fs = require('fs');
const path = require('path');
const dob = require('./src/js/dob');

const birthDate = new Date(dob);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const readmePath = path.join(__dirname, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');

readme = readme.replace(/{{AGE}}/g, age.toString());

fs.writeFileSync(readmePath, readme);
console.log(`✅ README updated with age: ${age}`);
