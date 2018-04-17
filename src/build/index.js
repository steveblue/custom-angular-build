const shell       = require('shelljs');
const path        = require('path');
const fs          = require('fs');
const exec        = require('child_process').exec;
const execSync    = require('child_process').execSync;
const spawn       = require('child_process').spawn;
const findup      = require('findup');
const processRoot = path.join(path.dirname(process.cwd()), path.basename(process.cwd()));
const projectRoot = findup.sync(processRoot, 'ngs.config.js');
const cliRoot     = findup.sync(__dirname, 'package.json');
const config = require(projectRoot + '/ngs.config.js');

class Build {

    constructor(program) {
        this.program = program;
        this.processRoot = processRoot;
        this.projectRoot = projectRoot;
        this.cliRoot = cliRoot;
        this.config = config;
    }

    copyDir(src, dist) {

        return new Promise((res) => {
            console.log('💥 ', 'copy', path.basename(src));
            res();
        });
        // if (!fs.existsSync(dist)) shell.mkdir('-p', dist);
        // return shell.cp('-R',
        //                 path.normalize(src + '/*'),
        //                 path.normalize(path.join(dist, '/')));

    }

    copyTo(filePath, dist) {

        const outFile = path.join(dist, filePath);

        return new Promise((res) => {
            console.log('💥 ', 'copy', filePath);
            res();
        });

    }

    copyBatch(fileList, dist) {

        return Promise.all(fileList.map((filePath) => {
            return this.copyTo(filePath, dist);
        }));

    }

    formatIndex(template) {

        console.log('💥 ', 'format template');

        return new Promise((res) => {
            res();
        });

        // simple implementation of exec calling htmlprocessor to format index.html
        // return exec('node_modules/.bin/htmlprocessor'+' '+
        //             template+' '+
        //             '-o build/index.html'+' '+
        //             '-e '+ this.program.build);

        // cross platform implementation of exec calling htmlprocessor to format index.html
        // return exec(path.join(this.projectRoot, path.normalize('node_modules/.bin/htmlprocessor'))+' '+
        //             template+' '+
        //             '-o '+ path.join('build', 'index.html')+' '+
        //             '-e '+ this.program.build);

    }

    compile() {

        return new Promise((res) => {
            console.log('💥 ','ngc started');
            res();
        })

    }


}

module.exports = Build;