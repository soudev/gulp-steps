# gulp-steps : 01 - basic


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`

* Must have [bower](http://bower.io/) node package installed globally. `sudo npm install -g bower`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/soudev/gulp-steps.git
cd gulp-steps/01
npm install
```


## Commands

> run gulp

```bash
npm start
```

### Gulp

* development workflow

```bash
gulp
```

* build

```bash
gulp release
```

* preview builded

```bash
gulp preview
```


## Commands on Mac

### Create commands list

```bash
npm init

npm install \
  del \
  jshint-stylish \
  browser-sync \
  gulp \
  gulp-sequence \
  gulp-jshint \
  gulp-lintspaces \
  gulp-concat \
  gulp-rename \
  gulp-uglify \
  --save-dev

touch gulpfile.js

bower init

touch .bowerrc

bower install \
  jquery \
  --save
```


## Links

* [jQuery](https://jquery.com/)

--

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] BrowserSync / browser-sync](https://github.com/browsersync/browser-sync) - Keep multiple browsers & devices in sync when building websites.

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

  * [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

* [[GitHub] ck86 / gulp-lintspaces](https://github.com/ck86/gulp-lintspaces) - A Gulp plugin for lintspaces

* [[GitHub] teambition / gulp-sequence](https://github.com/teambition/gulp-sequence) - Run a series of gulp tasks in order

  * [[GitHub] teambition / gulp-sequence : ISSUE 2 - Error: thunk already filled on subsequent run](https://github.com/teambition/gulp-sequence/issues/2)

* [[GitHub] wearefractal / gulp-concat](https://github.com/wearefractal/gulp-concat) - Streaming concat middleware for gulp

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS


## License

- [MIT](LICENSE)
