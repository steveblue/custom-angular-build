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

        if (!fs.existsSync(dist)) shell.mkdir('-p', dist);
        console.log('copy', path.basename(src));
        return shell.cp('-R',
                        path.normalize(src + '/*'),
                        path.normalize(path.join(dist, '/')));

    }

    copyTo(filePath, dist) {

        const outFile = path.join(dist, filePath);

        return new Promise((res) => {
            if (!fs.existsSync(outFile)) {
                if (!fs.existsSync(path.dirname(outFile))) {
                    shell.mkdir('-p', path.dirname(outFile));
                }
                console.log('copy', filePath);
                shell.cp('-R', path.join('node_modules', filePath), outFile);
                res();
            }
        });

    }

    copyBatch(fileList, dist) {

        return Promise.all(fileList.map((filePath) => {
            return this.copyTo(filePath, dist);
        }));

    }

    formatIndex(template) {

        console.log('format template');
        return exec(path.join(this.projectRoot, path.normalize('node_modules/.bin/htmlprocessor'))+' '+
                    template+' '+
                    '-o '+ path.join('build', 'index.html')+' '+
                    '-e '+ this.program.build);

    }

    compile() {

        console.log('ngc started');

        if (this.program.build === 'dev' && this.program.watch) {

            let ngc = spawn(path.join(this.projectRoot, 'node_modules', '.bin', 'ngc'),
                      ['-p', 'tsconfig.'+this.program.build+'.json', '--watch'],
                      {stdio: 'inherit'});

        } else {
            return new Promise((res) => {
                exec(path.join(this.projectRoot, 'node_modules', '.bin', 'ngc')+ ' '+
                    '-p tsconfig.'+this.program.build+'.json',
                    {silent: true}, (error, stdout, stderr) => {
                    if (stderr) {
                        console.log(stderr);
                    } else {
                        console.log('Compilation complete.');
                        res();
                    }
                });

            });
        }

    }


}

module.exports = Build;