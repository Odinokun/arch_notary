<h1>Notary site</h1>

<h2>Используемые технологии:</h2>
 - Gulp 4.0
 - Pug(Jade)
 - Sass(Scss)
 - JS+jQuery

<h2>Для старта:</h2>
<ol>
  <li>install node.js</li>
  <li>clone this repo</li>
  <li>cd path/to/</li>
  <li>npm i gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally</li>
  <li>npm i</li>
  <li>run "gulp" command to start</li>
</ol>

<h2>Npm-пакеты/плагины - devDependencies:</h2>
  - gulp "git+https://git@github.com/gulpjs/gulp.git#4.0" - Галп в 4-ой версии

  - gulp-pug                - рендеринг pug-файлов
  - gulp-prettify           - "причесывание" html

  - gulp-sass               - рендеринг scss-файлов
  - gulp-concat-css         - для конкатенации файлов стилей
  - gulp-autoprefixer       - проставляем префиксы
  - gulp-sourcemaps         - создание sourcemaps
  - gulp-csso               - для минификации файлов стилей

  - gulp-svg-sprite         - склеивает svg в спрайты
  - gulp-svgmin             - минифицирует svg
  - gulp-cheerio            - для удаления лишних атрибутов из svg

  - gulp-concat             - для конкатенации js
  - gulp-uglify             - для минификации js
  - gulp-eslint             - для проверки моих линтингов

  - gulp-imagemin           - минификация картинок
  - gulp-pngquant           - минификация PNG картинок (для gulp-imagemin)
  - gulp-newer              - для изменения только новых картинок (можно использовать для любых типов файлов)

  - browserify              - для сборки модулей из app.js
  - vinyl-buffer            - дополнение к browserify
  - vinyl-source-stream     - дополнение к browserify

  - browser-sync            - вывод проекта в браузер + показ изменений в Css3 без перезагрузки страницы
  - gulp-load-plugins       - для автоматического подключения плагинов для gulp (тех которые начинаются с "gulp-")
  - gulp-notify             - вывод/показ ошибок
  - gulp-replace            - правка/изменение путей и другого содержимого в процессе сборки (использую в sprite.svg.js)
  - rimraf                  - для удаления папки build при старте проекта


<h2>Npm-пакеты - dependencies:</h2>
  - animate.css
  - jquery v.2.2.4
  - normalize.css
  - slick slider


<h2>Структура шаблона:</h2>
  <ul>
    <li>fonts</li>
    <li>img</li>
    <li>js</li>
    <li>php</li>
    <li>pug
      <ul>
        <li>elements (мелкие элементы, например кнопки или пагинация)</li>
        <li>sections (крупные элементы, например header, footer, секции главной страницы)</li>
        <li>pages</li>
      </ul>
    </li>
    <li>sprite</li>
    <li>style
      <ul>
        <li>core (базовые стили)
          <ul>
            <li>fonts</li>
            <li>variables</li>
            <li>mixins</li>
            <li>base</li>
          </ul>
        </li>
        <li>elements (мелкие элементы, например кнопки или пагинация)</li>
        <li>sections (крупные элементы, например header, footer и секции главной страницы)</li>
        <li>pages (стили для страниц сайта)</li>
      </ul>
    </li>
    <li>vendors (сюда заливаем все чего нет в NPM и подключаем его в файлы foundation)</li>
    <li>video</li>
  </ul>