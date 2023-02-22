const { connect } = require("./client.js");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
