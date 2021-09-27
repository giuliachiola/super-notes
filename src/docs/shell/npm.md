# npm

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

| Command                 | Description                                                                   | Alias             |
| ----------------------- | :---------------------------------------------------------------------------- | :---------------- |
| `npm --help`            | help di tutti i comandi                                                       |                   |
| `npm help install`      | spiega come usare 'install' e qual è l'alias                                  |                   |
| `npm install <package>` | spiega come usare 'install' e qual è l'alias                                  | `npm i <package>` |
| `npm list sass-loader`  | cerca `sass-loder` nella cartella `node_modules` (anche come sottodipendenza) |
| `npm-check -u`          | check dei pacchetti da aggiornare interattivo                                 |                   |

```
alias: npm i

common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```

-> posso usare _una sola_ delle opzioni tra quadre (versione estesa oppure versione corta)

#### Per installare un pacchetto pulito:

1. Rimuovo il package
   `npm uninstall @frctl/twig --save-dev`
2. Lo reinstallo a cache pulita
   `npm install @frctl/twig --save-dev --cache /tmp/empty-cache`

"empty-cache" è il nome di una cartella, ogni volta che la pulisco devo scrivere un nome diverso es:
`npm install @frctl/twig --save-dev --cache /tmp/empty-cache2`

#### Eslint

Proprietà dichiarate in:
_package.json > eslint.rc > quello nella homedirectory_

#### Node module

per sapere la versione di un node_module
`node node_modules/webpack/bin/webpack.js -v`

#### Uglify

`pbpaste | uglifyjs | pbcopy`

Se voglio minificare al volo un file

- copio tutto il testo da minificare
- pbpaste: prende quello che ho nel cmd+c degli appunti
- lo mette in coda (pipe) e lo usa come input di uglyfyjs (minifica)
- lo butta fuori e lo prende pbcopy (che lo copia negli appunti)

## npx

- scarica ondemand il pacchetto se il pacchetto non esiste localmente
- altrimenti lo installa localmente dentro node_modules/.bin/

```shell
npx cowsay Giulia is cool
```

se devo lanciarlo dal package.json

```shell
"build:dev": "npx docsify serve ."
```

nota:

```
node_modules/.bid/docsify serve . = npx docsify serve .
```

### browserslist

Lista del browserslist support di default `npx browserslist defaults`

Per sapere se un browser è supportato: `npx browserslist _configuration_`

se è nel package.json o in .browserslist.rc basta `npx browserslist`

- in browserslist per beccare tutti i browser fare
  `npx browserslist` con `.browserslistrc` `> 0%` così li becca tutti

## npm arguments

npm run dev --theme sport → passa theme come variabile con argomento 'sport' al task dev
MA se il task dev chiama un altro task es
"dev": "npm run something " → "something" viene invocato con argomento 'sport' e 'theme' diventa 'true' → come se scrivessimo npm run something sport quindi si perde l'assegnazione
