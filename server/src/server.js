import { createServer } from "net";
const fs = require('fs');

const users = JSON.parse(fs.readFileSync('./src/data/user.json'));

import { cwd } from "./Fonction/cwd"
import { list } from "./Fonction/list"
import { pwd } from "./Fonction/pwd"
import { quit } from "./Fonction/quit"


export function launch(port) {

  const server = createServer((socket) => {
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {
       
       case "USER":     
        if (args[0] == undefined) {
          socket.write('Votr nom de compte :\r\n');
          break;
        }else{
          socket.n = args[0];
          let r = "";
          users.forEach(user => {
            if (user.id === socket.n){
              socket.pass = user.passW;
              r = '230 User logged in, proceed \r\n';
            }else{
              r = '230 User logged in, proceed \r\n';
            }
          });
          socket.write(r);
        }
          break;  

      case "PASS":
        if (args[0] == undefined || args[0] != socket.pass) 
        {
          socket.write('Votre mot de passe :\r\n');
        }
        else if (args[0] == socket.pass)
        {
          socket.write('331 Username okay, awaiting password \r\n');
        }

        break;

            case "LIST":
            socket.write(`${list()} \r\n`);
              break;

        case "PWD":
            socket.write(`Current directory of the server : ${pwd()}\r\n`);
            break;

        case 'CWD': 
            socket.write(`New directory: ${cwd(args)}`);
            break;

        case "QUIT" :
          quit(socket);
            break;

        case "HELP" :
        let help = "USER <username>: check if the user exist PASS <password>: authenticate the user with a password \n"+
                          "LIST: list the current directory of the server\n"+
                          "CWD <directory>: change the current directory of the server\n"+
                          "RETR <filename>: transfer a copy of the file FILE from the server to the client\n" +
                          "STOR <filename>: transfer a copy of the file FILE from the client to the server\n"+
                          "PWD: display the name of the current directory of the server \n"+
                          "QUIT: close the connection and stop the program";
            socket.write(help)
            break;

        case "LIST" : 
        socket.write(`List : ${list()} \r\n`);
            break;

        default :
            socket.write("502 : Command not supported");
      }
  
    });

    socket.write("220 Service ready for new user \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });
}
