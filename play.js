const connect = require("./client.js");

const setupInput = function () {
  stdin.on("data", handleUserInput);

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "\u0003") {
    process.exit();
  } else {
    conn.write(data);
  }
};
