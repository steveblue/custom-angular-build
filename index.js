#!/usr/bin/env node
const program = require('commander');
const package = require(__dirname + '/package.json');

program
    .version(package.version)
    .usage('<keywords>')
    .option('build [env]', 'build the application')
    .option('--watch [bool]', 'configure ngc to listen for changes and compile')
    .option('scaffold', 'scaffold a new app')
    .parse(process.argv);

if (program.build) {
    const BuildScript = require('./src/build/'+program.build);
    const build = new BuildScript(program);
    build.init();
}

if (program.scaffold) {
    const Scaffold = require('./src/scaffold/index');
    const scaffold = new Scaffold();
    scaffold.init();
}

