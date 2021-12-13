import fs from 'fs'
export function list()
{
    let fl = "";
    let fv = fs.readdirSync(process.cwd());
   fv.forEach((items) => {

        fl +=  items + "\r\n";

});
return fl;
}