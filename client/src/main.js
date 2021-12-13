import { createConnection } from "net";
import { createInterface} from "readline";

let currentCommand = '';
let isAuthenticated = false;

const rl = createInterface({
  input: process.stdin,
});


const client = createConnection({ port: 4242 }, () => {
  console.log("220 Service ready for new user");
  rl.on("line", (input) => {
    client.write(input);
  })

client.on("data", (data) => {
  const message = data.toString();
  console.log("Message received:", message);

  const [status, ...args] = message.trim().split(" ");
  if (status == 230 && currentCommand === "USER") {
    isAuthenticated = true;

  }
  
  if (status == 221) {
    console.log("221 Service closing control connection, Bye")
    process.exit();
  }

});
});
