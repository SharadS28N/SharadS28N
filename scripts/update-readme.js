const fs = require("fs");

const birthDate = new Date("2006-11-03"); // Change this to your real birthdate
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

// Read README
const readmePath = "README.md";
let content = fs.readFileSync(readmePath, "utf8");

// Replace placeholder
const newContent = content.replace(/A \*\*\{\{AGE\}\}\*\* years Old Fellow/, `A **${age}** years Old Fellow`);

if (content !== newContent) {
  fs.writeFileSync(readmePath, newContent);
  console.log("README updated with new age:", age);
} else {
  console.log("Age is already up to date.");
}
