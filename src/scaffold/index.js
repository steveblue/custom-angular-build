const path        = require('path');
const fs          = require('fs');
const shell       = require('shelljs');
const findup      = require('findup');
const cliRoot     = findup.sync(__dirname, 'package.json');
const processRoot = path.join(path.dirname(process.cwd()), path.basename(process.cwd()));

class Scaffold {

    constructor(program) {
        this.program = program;
    }

    copyDir(src, dist) {

        if (!fs.existsSync(dist)) shell.mkdir('-p', dist);
        shell.ls(src).forEach( filePath => { console.log('copy', filePath, 'to', path.basename(dist)) } );
        return shell.cp('-R', path.normalize(src + '/*'), path.normalize(path.join(dist, '/')));

    }


    init() {

        (async () => {
          const copySrc = await this.copyDir(path.join(cliRoot, 'src', 'scaffold', 'project'), processRoot);
        })();

    }

}

module.exports = Scaffold;