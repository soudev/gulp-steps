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
  gulp-rev \
  gulp-rev-replace \
  gulp-useref \
  gulp-filter \
  gulp-uglify \
  gulp-csso \
  gulp-minify-html \
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

  * [[GitHub] sindresorhus / gulp-rev](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css

  * [[GitHub] jamesknelson / gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace) - Rewrite occurences of filenames which have been renamed by gulp-rev

  * [[GitHub] jonkemp / gulp-useref](https://github.com/jonkemp/gulp-useref) - Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.

  * [[GitHub] sindresorhus / gulp-filter](https://github.com/sindresorhus/gulp-filter) - Filter files in a vinyl stream

  * [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

  * [[GitHub] ben-eb / gulp-csso](https://github.com/ben-eb/gulp-csso) - Minify CSS with CSSO.

  * [[GitHub] murphydanger / gulp-minify-html](https://github.com/murphydanger/gulp-minify-html) - A Gulp plugin that minifies html with Minimize


## License

- [MIT](LICENSE)
