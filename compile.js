var filewatcher = require('filewatcher');
const { exec } = require("child_process");
var watcher = filewatcher();

watcher.add(__dirname+"/partials");
watcher.add(__dirname+"/src"); 
watcher.on('change', function(file, stat) {
  console.log('Folder modified: %s', file);
  exec("npx gluu", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
});
});