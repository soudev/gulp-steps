# gulp-steps : 02 - intermediário ([en](README.md))

> Uso intermediário do Gulp
> - todas as tarefas estão definidas diretamente no [gulpfile.js](gulpfile.js#L92)
> - bloco de código com utilidades estão definidas nas [linhas 5-53 do gulpfile.js](gulpfile.js#L5-L53)
>   - os plugins do gulp são carregados com o [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) na [linha 7 do gulpfile.js](gulpfile.js#L7)
> - as configurações estão centralizadas em um bloco de código nas [linhas 55-90 do gulpfile.js](gulpfile.js#L55-L90)
> - utilizado o [lazypipe](https://github.com/OverZealous/lazypipe) para compartilhar e reutilizar processamentos
>   - jshint na [linha 122 do gulpfile.js](gulpfile.js#L122)
>   - lintspaces na [linha 145 do gulpfile.js](gulpfile.js#L145)
>   - `$.streams.` definido no bloco de código de utilidades na [linha 23 do gulpfile.js](gulpfile.js#L23)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalado

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Gulp.js](http://gulpjs.com/) instalado como pacote global do node. `sudo npm install -g gulp`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/gulp-steps.git
cd gulp-steps/02
npm install
```


## Comandos

> Executa o gulp

```bash
npm start
```

### Gulp

* fluxo de desenvolvimento

```bash
gulp
```

* construção (versão para produção)

```bash
gulp release
```

* visualiza a versão construída

```bash
gulp preview
```


## Comandos no Mac

### Lista de comandos que criaram o projeto

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


## Licença

- [MIT](../LICENSE)
