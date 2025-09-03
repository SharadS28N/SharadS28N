const fs = require("fs");

const birthDate = new Date("2006-05-15"); // <-- Your actual birthdate here!
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

const readmePath = "README.md";
let content = fs.readFileSync(readmePath, "utf8");

// Look for the exact placeholder and replace it
const newContent = content.replace(
  /A \*\*\{\{AGE\}\}\*\* years Old Fellow/,
  `A **${age}** years Old Fellow`
);

if (content !== newContent) {
  fs.writeFileSync(readmePath, newContent);
  console.log("✅ Age updated in README:", age);
} else {
  console.log("ℹ️ Age is already up to date or placeholder not found.");
}
