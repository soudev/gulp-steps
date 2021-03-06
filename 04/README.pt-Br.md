# gulp-steps : 04 - aprimorado ([en](README.md))

> Uso aprimorado do Gulp
> - [tools/](tools)
>   - [gulp/](tools/gulp)
>     - [helpers/](tools/gulp/helpers)
>       - [$.js](tools/gulp/helpers/$.js) - ultilidades para o gulp
>         - os plugins do gulp são carregados com o [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) na [linha 2 do $.js](tools/gulp/helpers/$.js#L2)
>         - as configurações das ferramentas e do gulp são carregadas na [linha 29 do $.js](tools/gulp/helpers/$.js#L29)
>       - [loadTasks.js](tools/gulp/helpers/loadTasks.js) - serviço para carregar as tarefas do gulp a partir de um [diretório especificado](tools/gulp/helpers/loadTasks.js#L7)
>     - [tasks/](tools/gulp/tasks) - tarefas do gulp separadas em múltiplos arquivos
>       - cada arquivo de tarefas do gulp recebe como parâmetros `gulp` e `$` do [carregador de tarefas `tools/gulp/helpers/loadTasks.js`](tools/gulp/helpers/loadTasks.js#L16) (ex.: [clean.js](tools/gulp/tasks/clean.js#L1))
>   - [config.js](tools/config.js) - configurações das ferramentas e do gulp
> - gulpfile.js
>   - os arquivos com as tarefas do gulp são carregados com o [./tools/gulp/helpers/loadTasks.js](tools/gulp/helpers/loadTasks.js) na [linha 8 do gulpfile.js](gulpfile.js#L8)
>   - as definições das tarefas principais e da tarefa default(padrão) do gulp estão no [./tools/gulp/tasks/default.js](tools/gulp/tasks/default.js)
> - utilizado o [lazypipe](https://github.com/OverZealous/lazypipe) para compartilhar e reutilizar processamentos
>   - jshint na [linha 3 do ./tools/gulp/tasks/jshint.js](tools/gulp/tasks/jshint.js#L3)
>   - lintspaces na [linha 3 do ./tools/gulp/tasks/lintspaces.js](tools/gulp/tasks/lintspaces.js#L3)
>   - `$.streams.` definido na [linha 34 do ./tools/gulp/helpers/$.js](tools/gulp/helpers/$.js#L34)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalado

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Gulp.js](http://gulpjs.com/) instalado como pacote global do node. `sudo npm install -g gulp`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/gulp-steps.git
cd gulp-steps/04
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
