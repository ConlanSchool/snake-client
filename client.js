const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.113.238",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LUL");
  });

  conn.on("data", (data) => {
    console.log("Server: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;
