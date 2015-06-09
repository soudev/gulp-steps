# gulp-steps : 04 - enhanced ([pt-Br](README.pt-Br.md))

> Enhanced usage of Gulp
> - [tools/](tools)
>   - [gulp/](tools/gulp)
>     - [helpers/](tools/gulp/helpers)
>       - [$.js](tools/gulp/helpers/$.js) - gulp utilities
>         - gulp plugins loaded with [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) at [$.js line 2](tools/gulp/helpers/$.js#L2)
>         - tools and gulp settings loaded at [$.js line 29](tools/gulp/helpers/$.js#L29)
>       - [loadTasks.js](tools/gulp/helpers/loadTasks.js) - load gulp tasks from [given directory](tools/gulp/helpers/loadTasks.js#L7)
>     - [tasks/](tools/gulp/tasks) - gulp tasks splitted into multiple files
>       - each gulp tasks file receive from [tasks loader `tools/gulp/helpers/loadTasks.js`](tools/helpers/loadTasks.js#L16) `gulp` and `$` as parameters (ex.: [clean.js](tools/gulp/tasks/clean.js#L1))
>   - [config.js](tools/config.js) - tools and gulp settings
> - gulpfile.js
>   - gulp tasks files loaded with [./tools/gulp/helpers/loadTasks.js](tools/gulp/helpers/loadTasks.js) at [gulpfile.js line 8](gulpfile.js#L8)
>   - gulp default and main tasks defined on [./tools/gulp/tasks/default.js](tools/gulp/tasks/default.js)
> - used [lazypipe](https://github.com/OverZealous/lazypipe) to share and reuse pipeline
>   - jshint at [./tools/gulp/tasks/jshint.js line 3](tools/gulp/tasks/jshint.js#L3)
>   - lintspaces at [./tools/gulp/tasks/lintspaces.js line 3](tools/gulp/tasks/lintspaces.js#L3)
>   - `$.streams.` defined on utilities [./tools/gulp/helpers/$.js line 34](tools/gulp/helpers/$.js#L34)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`

* Must have [bower](http://bower.io/) node package installed globally. `sudo npm install -g bower`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/soudev/gulp-steps.git
cd gulp-steps/04
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

* build (production version)

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
  lazypipe \
  gulp-load-plugins \
  gulp \
  gulp-util \
  gulp-sequence \
  gulp-cached \
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

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp.

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

  * [[GitHub] wearefractal / gulp-cached](https://github.com/wearefractal/gulp-cached) - A simple in-memory file cache for gulp

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
