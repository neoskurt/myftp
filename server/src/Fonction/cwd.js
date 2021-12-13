export function cwd(path)
{
    try {
        process.chdir(path.toString());
        return (process.cwd());
      } 
      catch (err)
      {
        return (err.toString());
      }
}
