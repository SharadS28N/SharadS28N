const fs = require("fs");

const birthDate = new Date("2006-11-03");
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const readmePath = "README.md";
let content = fs.readFileSync(readmePath, "utf8");

// Debug log
console.log("Calculated age:", age);

// Replace ANY bold number between 10-99
const updatedContent = content.replace(/\*\*\d{1,2}\*\*/g, `**${age}**`);

if (content !== updatedContent) {
  fs.writeFileSync(readmePath, updatedContent);
  console.log(`✅ Updated age in README to ${age}`);
} else {
  console.log("⚠️ No changes made. Pattern not found.");
}
