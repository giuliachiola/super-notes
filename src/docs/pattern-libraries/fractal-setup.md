# Fractal setup

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

- install fractal globally `npm i -g @frctl/fractal`
- start the project [https://fractal.build/guide/getting-started.html#the-tl-dr-method](https://fractal.build/guide/getting-started.html#the-tl-dr-method) → `fractal new <project name>` nel nostro caso vogliamo che la cartella si chiami "fractal" quindi `[cartellaprogetto] > fractal new fractal` così crea una cartella fractal e genera un progetto da zero: (attenzione ad aggiungere `source/` sotto)

```bash
? What's the title of your project? Test Fractal
? Where would you like to keep your components? source/components
? Where would you like to keep your docs? source/docs
? What would you like to call your public directory? public
? Will you use Git for version control on this project? Yes
```

- entrare dentro la cartella `fractal/` e provare `fractal start --sync` dovrebbe funzionare
- add twig adapter [https://github.com/frctl/fractal/tree/main/packages/twig](https://github.com/frctl/fractal/tree/main/packages/twig)

```bash
npm install @frctl/twig --save-dev
```

- testare con `example.twig` se funziona tutto

  ```scss
  ├── source
  │   ├── components
  │   │   ├── example
  │   │   │   └── example.config.js
  │   │   │   └── example.twig
  ```

```bash
module.exports = {
	title: 'Example',
	status: 'wip',
	context: {
		text: 'Lorem ipsum'
	},
	variants: []
}
```

- aggiungere `assets` dentro a `source`

  ```bash
  ├── source
  │   ├── assets
  │   │   └── fonts
  │   │   └── img
  │   │   ├── js
  │   │   │   └── main.js
  │   │   └── scss
  │   └── docs
  │   └── components
  ```

- ^^^ chiamarlo `main.js` e non `app.js` come nello screenshot perché poi webpack il buildato lo chiama main.js di default
- add `fractal.config.js` (o editare `fractal.js` funziona uguale)

```bash
'use strict';

// Create a new Fractal instance
const fractal = module.exports = require('@frctl/fractal').create();
// Require the Twig adapted
const twigAdapter = require('@frctl/twig')();
// Require the basic theme
const mandelbrot = require('@frctl/mandelbrot');

// const myCustomisedTheme = mandelbrot({
//  favicon: '/favicon.ico',
//   styles: '/css/custom-fractal.css'
// });

// fractal.web.theme(myCustomisedTheme);

// Project title
fractal.set('project.title', 'Injenia Fractal');

// Tell Fractal where to get components
fractal.components.set('path', __dirname + '/source/components');

// Tell Fractal where to get documents
fractal.docs.set('path', __dirname + '/source/docs');

// Tell Fractal where to export static HTML
fractal.web.set('builder.dest', __dirname + '/build');

// Set the template adapter (Twig)
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');

// Tell Fractal where to look for static assets.
fractal.web.set('static.path', __dirname + '/public');

// Set Browsersync to reload browser on changes
fractal.web.set('server.sync', true);

// Tell Fractal to set a preview
fractal.components.set('default.preview', '@preview');
```

---

- sotto `components/`aggiungere `_preview.twig`

```bash
<!DOCTYPE html>
<html class="no-js">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link media="all" rel="stylesheet" href="{{ '/css/style.css'|path }}">
		<title>Preview</title>
		<!-- preview styles -->
		<link media="all" rel="stylesheet" href="{{ '/css/preview-style.css'|path }}">
	</head>
	<body class="preview">

		{{ yield|raw }}

		<script type="text/javascript" src="{{ '/js/main.js'|path }}"></script>

	</body>
</html>
```

- a questo punto `fractal start --sync` dovrebbe già funzionare ma senza stili 🙂

- add `[README.md](http://readme.md)` file in `fractal/` folder

````md
# Fractal boilerplate

This command copies all the static assets in the `public` folder, compiles all `scss` files and starts fractal with the watch command.

/`bash npm run fractal /`
or
/`bash npm run dev /`

This command export all components into static HTML in the folder `build`.
/`bash npm run build /`
````

## Styles

sass build
nope ~~- install node-sass `npm install --save-dev node-sass`~~

```
npm install --save-dev sass sass-loader sass-mq
```

nodemon

```
npm install nodemon --save-dev
```

```bash
"_____________________________Styles_____________________________________________": "",
"styles": "sass --style compressed --load-path './node_modules/' source/assets/scss:public/static/css && postcss -r public/static/css/style.css",
```

## JS

- install webpack `npm install -D webpack` and webpack-cli `npm install webpack-cli --save-dev`
- add script

```bash
"____________________________JS___________________________________________": "",
"compile:js": "webpack-cli --watch --entry ./source/assets/js/app.js --mode development --output-path public/js/app.js",
```

## Copy from source to dist

- install `npm install ncp --save-dev`
- add script

```bash
"____________________________Styleguide___________________________________________": "",
		"copy:public": "ncp source/assets/img source/assets/favicon.ico source/assets/fonts public/",
```

### Htaccess

- add htaccess file

```bash
<ifModule mod_gzip.c>
    mod_gzip_on Yes
    mod_gzip_dechunk Yes
    mod_gzip_item_include file .(html?|txt|css|js|php|pl)$
    mod_gzip_item_include handler ^cgi-script$
    mod_gzip_item_include mime ^text/.*
    mod_gzip_item_include mime ^application/x-javascript.*
    mod_gzip_item_exclude mime ^image/.*
    mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
</ifModule>

## EXPIRES CACHING ##
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access 1 year"
    ExpiresByType image/jpeg "access 1 year"
    ExpiresByType image/gif "access 1 year"
    ExpiresByType image/png "access 1 year"
    ExpiresByType text/css "access 1 month"
    ExpiresByType text/html "access 1 month"
    ExpiresByType application/pdf "access 1 month"
    ExpiresByType text/x-javascript "access 1 month"
    ExpiresByType application/x-shockwave-flash "access 1 month"
    ExpiresByType image/x-icon "access 1 year"
    ExpiresDefault "access 1 month"
</IfModule>
## EXPIRES CACHING ##
```

```bash
"____________________________Styleguide___________________________________________": "",
		"copy:htaccess": "ncp source/assets/.htaccess ./",
```

### Templates

- aggiungere struttura dei template

  ```scss
  ├── components
  │   ├── 00-design
  │   ├── 01-components
  │   ├── 02-pages
  │   └── _preview.twig
  ```

- aggiungere i template nella cartella `02-pages`

```bash
module.exports = {
	title: 'Homepage',
	status: 'wip',
	context: {
		'components': [],
	},
	variants: []
}
```

Aggiungere fonts:

```md
fractal/source/components/\_fonts.twig
```

```md
{# TypeKit Fonts #}

<link rel="stylesheet" href="https://use.typekit.net/dpv8rmd.css">

{#
Google Fonts
https://csswizardry.com/2020/05/the-fastest-google-fonts/
#}

<link rel="preconnect"
			href="https://fonts.gstatic.com"
			crossorigin />

<link rel="preload"
			as="style"
			href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap" />

<link rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap"
			media="print" onload="this.media='all'" />

<noscript>
	<link rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap" />
</noscript>
```

- preview

```html
{# Fonts #} {% render '@fonts' %} {# preview styles #}
<link media="all" rel="stylesheet" href="{{ '/css/preview-style.css'|path }}" />
```

- aggiungere preview styles

- aggiungere postcss Fractal (progetto?)

- cambiare `bodyText` in kebab case
- aggiungere file twig: tipografia, colori (fare la palette), togliere example twig
- copiare `data.js` -> `fractal/source/data/data.js`

- aggiungere postcss

```shell
npm install -D postcss postcss-cli postcss-normalize postcss-preset-env
```

- fare cartelle

`components/00-design`
`components/01-components`
`components/02-pages`

- se si riesce, wrappare preview page e preview dentro lo stesso file con un flag

- nell'example.config.js definire anche le variants

```
"name": "success",
"status": "prototype",
"context": {
    "modifier": "success",
    "message": "This is a success banner"
}
```

- mettiamo anche ESlint?
- cta di base (twig + scss vuoto)
- list-reset + button-reset come placeholers, non mixin
- nella styleguide aggiungere tabs accessibili -> vedi media-tabs (+ tabs.js)
- nella definizione ul li non fare margin-bottom a tutti, ma se sei figlio di (vedi)
