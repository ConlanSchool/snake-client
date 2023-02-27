let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//movement controls
let upIntervalId;
let leftIntervalId;
let downIntervalId;
let rightIntervalId;

const handleUserInput = function (data) {
  clearInterval(upIntervalId);
  clearInterval(leftIntervalId);
  clearInterval(downIntervalId);
  clearInterval(rightIntervalId);

  if (data === "\u0003") {
    process.exit();
  } else if (data === "w") {
    upIntervalId = setInterval(() => {
      connection.write("Move: up");
    }, 100);
  } else if (data === "a") {
    leftIntervalId = setInterval(() => {
      connection.write("Move: left");
    }, 100);
  } else if (data === "s") {
    downIntervalId = setInterval(() => {
      connection.write("Move: down");
    }, 100);
  } else if (data === "d") {
    rightIntervalId = setInterval(() => {
      connection.write("Move: right");
    }, 100);
  } else {
    connection.write(data);
  }

  //sssecret messages
  if (data === "l") {
    connection.write("Say: LUL");
  } else if (data === "f") {
    connection.write("Say: forsen");
  }
};

module.exports = {
  setupInput,
};
