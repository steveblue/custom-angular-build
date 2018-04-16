module.exports = {
    src: 'src',
    build: 'build',
    lib: {
        dev: [
            'systemjs/dist/system.js',
            'zone.js/dist/zone.js',
            'reflect-metadata/Reflect.js',
            'reflect-metadata/Reflect.js.map',
            'tslib/tslib.js',
            '@angular/core/bundles/core.umd.js',
            '@angular/core/bundles/core.umd.js.map',
            '@angular/common/bundles/common.umd.js',
            '@angular/common/bundles/common.umd.js.map',
            '@angular/router/bundles/router.umd.js',
            '@angular/router/bundles/router.umd.js.map',
            '@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/bundles/platform-browser.umd.js.map',
            'rxjs/index.js',
            'rxjs/index.js.map',
            'rxjs/operators',
            'rxjs/internal'
        ],
        prod: [
            'systemjs/dist/system.js',
            'zone.js/dist/zone.js'
        ],
        src: './node_modules',
        dist: './build/lib'
    }
}
