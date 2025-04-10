const fs = require('fs');

// Your Date of Birth
const dob = new Date('2000-04-10');

// Calculate age
const today = new Date();
let age = today.getFullYear() - dob.getFullYear();
const m = today.getMonth() - dob.getMonth();
if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

// Read the README
let readme = fs.readFileSync('README.md', 'utf8');

// Replace {{AGE}} with actual age
readme = readme.replace(/{{AGE}}/g, age.toString());

// Save updated README
fs.writeFileSync('README.md', readme);
