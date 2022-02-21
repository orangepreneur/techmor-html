// var filewatcher = require('filewatcher');
// const { exec } = require("child_process");
// var watcher = filewatcher();

// watcher.add(__dirname+"/partials");
// watcher.add(__dirname+"/src"); 
// watcher.on('change', function(file, stat) {
//   console.log('Folder modified: %s', file);
//   exec("npx gluu", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
// });
// });

var minify = require('html-minifier').minify;
var result = minify('<p title="blah" id="moo"> asfoo asd as</p>', {
  removeAttributeQuotes: true
});
console.log(result);

var path = require('path'), fs=require('fs');

function fromDir(startPath,filter){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
            console.log('-- found: ',filename);
        };
    };
};

fromDir('../LiteScript','.html');