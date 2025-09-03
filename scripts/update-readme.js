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

const updatedContent = content.replace(/\*\*\{\{AGE\}\}\*\*/g, `**${age}**`);

if (content !== updatedContent) {
  fs.writeFileSync(readmePath, updatedContent);
  console.log(`✅ Updated age in README to ${age}`);
} else {
  console.log("ℹ️ Age is already up to date or no placeholder found.");
}
