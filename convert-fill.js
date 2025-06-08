// convert-fill.js
const fs = require("fs");
const path = require("path");

const folder = "public/logos"; // your icon folder
fs.readdirSync(folder).forEach((file) => {
  if (file.endsWith(".svg")) {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, "utf8");
    content = content.replace(/fill="(#.{3,6})"/gi, 'fill="currentColor"');
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated: ${file}`);
  }
});
