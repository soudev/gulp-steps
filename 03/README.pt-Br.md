# gulp-steps : 03 - avançado ([en](README.md))

> Uso avançado do Gulp
> - Espalhando o Gulp
>   - definição das tarefas em múltiplos arquivos no diretório [./gulp/tasks](gulp/tasks)
>   - configurações definidas no arquivo [./gulp/config.js](gulp/config.js)
>   - utilidades definidas no arquivo [./gulp/$.js](gulp/$.js)
>     - plugins do gulp carregados com [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) na [linha 2 do arquivo ./gulp/$.js](gulp/%24.js#L2)
>     - configurações do gulp carregado na [linha 16 do ./gulp/$.js](gulp/%24.js#L16)
> - gulpfile.js
>   - arquivos das tarefas do gulp carregados com [requireDir](https://github.com/aseemk/requireDir) na [linha 7 do gulpfile.js](gulpfile.js#L7)
>   - ultidades `./gulp/$.js` para o gulp carregado na [linha 3 do gulpfile.js](gulpfile.js#L3)
>   - definição da tarefas principais e default(padrão) do gulp nas [linnhas 12-26 do gulpfile.js](gulpfile.js#L12-L26)
> - utilizado o [lazypipe](https://github.com/OverZealous/lazypipe) para compartilhar e reutilizar processamentos
>   - jshint na [linha 7 do ./gulp/tasks/jshint.js](gulp/tasks/jshint.js#L7)
>   - lintspaces na [linha 7 do ./gulp/tasks/lintspaces.js](gulp/tasks/lintspaces.js#L7)
>   - `$.streams.` definido na [linha 21 do ./gulp/$.js](gulp/%24.js#L21)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalad

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Gulp.js](http://gulpjs.com/) instalado como pacote global do node. `sudo npm install -g gulp`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/gulp-steps.git
cd gulp-steps/03
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
  require-dir \
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

* [[GitHub] aseemk / requireDir](https://github.com/aseemk/requireDir) - Node.js helper to require() directories.

  * [Spreading Gulp tasks into multiple files | Medium by @_rywar](https://medium.com/@_rywar/spreading-gulp-tasks-into-multiple-files-2f63d8c959d5)

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

- [MIT](LICENSE)
