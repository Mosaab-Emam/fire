const path = require("path");
const fs = require("fs");

module.exports = apiName => {
  // Set variables for directories
  const rootDir = process.cwd();
  const apiDir = path.join(rootDir, `api/${apiName}`);

  // create api folder if it doesn't already exist
  !fs.existsSync("./api") && fs.mkdirSync("./api");

  // create api folder under ./api
  fs.mkdirSync(apiDir);

  // generate model.js, controller.js, and router.js
  for (file of ["model", "controller", "router"]) {
    // get file content from template
    // then replace placeholders with apiName
    const content = fs
      .readFileSync(path.join(__dirname, `../contents/${file}.js`), "utf8")
      .replace(/placeHolder/g, apiName)
      .replace(
        /PlaceHolder/g,
        apiName.charAt(0).toUpperCase() + apiName.slice(1)
      );

    // create the actual file
    fs.writeFileSync(
      path.join(apiDir, `${apiName}.${file}.js`),
      content,
      "utf8"
    );
  }
};
