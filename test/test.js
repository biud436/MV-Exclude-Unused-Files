
const fs = require('fs');
const path = require('path');
const options = require("../lib/config");

let sourceDir = `C:/Users/U/Desktop/MV`;

class Utils {

    /**
     * 
     * @param {Array} list 
     * @param {String} src 
     */
    static getFiles(list, src) {
        
        let files = fs.readdirSync(src, "utf8");
    
        files.forEach(file => {
            
            let fullPath = path.join(src, file);

            const stat = fs.lstatSync(fullPath);            

            if(stat.isDirectory()) {
                if(options.excludeFolder.indexOf(file) === -1) {
                    this.getFiles(list, fullPath);
                }
            } else {
                if(options.excludeExt.indexOf(path.extname(file)) === -1) {
                    list.push(fullPath);
                }
            }
        });
    }
}

let myFiles = [];
Utils.getFiles(myFiles, sourceDir);
myFiles.forEach(i => console.log(i));