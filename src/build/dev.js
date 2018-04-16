const path  = require('path');
const Build = require('./index');

class DevBuild extends Build {

    constructor(program) {
        super(program);
    }

    init() {

        (async () => {
          const lib = await this.copyBatch(this.config.lib['dev'], this.config.lib.dist);
        })();

        (async () => {
          const publicDir = await this.copyDir(path.join(this.config.src, 'public'), this.config.build);
          const template = await this.formatIndex(path.join(this.config.src, 'public', 'index.html'));
        })();

        (async () => {
          const src = await this.compile();
        })();

    }
}

module.exports = DevBuild;