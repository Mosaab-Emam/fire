#!env node
const apiHandler = require("./handlers/apiHandler");

// check for second argument
switch (process.argv[2]) {
  case "api":
    if (process.argv[3]) {
      // Only runs if the api name is provided too
      apiHandler(process.argv[3]);
      break;
    }
  default:
    console.log("I dont know what to do");
}
