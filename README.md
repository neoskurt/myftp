# Summary

* [Description](#Description)
* [Installation](#Installation)
* [Lunch](#Lunch)
* [Help](#Help)
* [License](#License)

## <a name='Description'> Description</a>
FTP server and client

## <a name='Installation'> Installation</a>

Install npm in both client and server repositories.
```bash
cd server/
npm install
cd ../client
npm install
```
Install all plugin for babel 
```bash
cd server/
npm install @babel/cli @babel/core @babel/node @babel/preset-env
cd ../client
npm install @babel/cli @babel/core @babel/node @babel/preset-env
```

## Lunch
Run server and after client

```bash
cd server/
npm run dev
cd ../client/
npm run dev 
```
## Help

Use the command for more informations

```bash
HELP
{"USER <username>":"check if the user exist"
"PASS <password>":"authenticate the user with a password"
"LIST":"list the current directory of the server"
"CWD <directory>":"change the current directory of the server"
"RETR <filename>":"transfer a copy of the file FILE from the server to the client"
"STOR <filename>":"transfer a copy of the file FILE from the client to the server"
"PWD":"display the name of the current directory of the server"
"HELP":"send helpful information to the client"
"QUIT":"close the connection and stop the program"}
```

## License

Realize by NeoSkurt student of efrei Paris