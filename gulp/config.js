var src = './src';
var build = './build';

module.exports = {
    less: {
        all: src + "/less/**/*.less",  //所有less
        src: src + "/less/*.less",     //需要编译的less
        build: build + "/css", //输出目录
        settings: {
        }
    },
    browser_sync: {
        root: './',
        watch: ['./src/html/*.html', './build/css/*.css']
    }
};
