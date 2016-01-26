var gulp        = require('gulp');
var bs = require('browser-sync').create();
var config = require('../config').browser_sync;

// 静态服务器
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: config.root,
            routes: {
                "/": "src/html"
            }
        },
        files: config.watch
    });
});