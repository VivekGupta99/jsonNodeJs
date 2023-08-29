// JSON stands for javascript object notation.
// JSON is lightweight format for storing and transporting Data
// JSON is often used when data is sent from server to we pages

const fs = require("fs");
const myBioData = {
  name: "vinod",
  age: 24,
  channel: "vinod thappa",
};

// tasks
// 1. convert to JSON
// 2. dusre file mai add karna
// 3. readFile
// 4. again convert back to js obj ori
// 5. console.log

const jsonData = JSON.stringify(myBioData);

fs.writeFile("json.json", jsonData, (err) => {
  console.log(err);
});

fs.readFile("json.json", "utf-8", (err, data) => {
  console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
