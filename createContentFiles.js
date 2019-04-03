// Function to create content JSON files from a single
// JSON array
const fs = require("fs");

const slugifyString = (str, ignoreSlash = false) => {
  let a = "àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·_,:;/";
  const b = "aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------";
  let specialRegex = new RegExp(/[^\w\-]+/g);
  let newStr = str;

  if (ignoreSlash) {
    a = a.substr(0, a.length - 1);
    specialRegex = new RegExp(/[^\w\-\/]+/g);
    newStr = str.replace(/\/{2,}/gi, "/");
  }
  const p = new RegExp(a.split("").join("|"), "g");

  return newStr
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(specialRegex, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const filePath = "../toBeAdded-03-04-19.json";

const creationCb = (err, fileName) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`${fileName} created!`)
}

const createJsonFile = entry => {
  if (!entry || !Array.isArray(entry.suggestions)) {
    console.log(entry);
  }

  const fileName = `./test/${slugifyString(entry.url)}.json`;

  fs.writeFile(fileName, JSON.stringify(entry), "utf8", err => creationCb(err, fileName));
};

const readJsonCb = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  obj = JSON.parse(data);
  for (const entry of obj) {
    createJsonFile(entry);
  }
};

fs.readFile(filePath, "utf8", readJsonCb);
// fs.readFile(filePath, 'utf8', function readFileCallback(err, data){
//   if (err){
//       console.log(err);
//   } else {
//   obj = JSON.parse(data); //now it an object
//   obj.table.push({id: 2, square:3}); //add some data
//   json = JSON.stringify(obj); //convert it back to json
//   fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back
// }});
