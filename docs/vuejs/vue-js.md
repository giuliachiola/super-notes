# Vue JS
#### Props default

```
props: {
  myObj: {
    type: Object,
    default: () => {}
  }
}
```
^^ Così passo solo il default dell’oggetto vuoto

```
props: {
  myObj: {
    type: Object,
    default: () => ({    // NOTA: ci sono le parentesi tonde attorno alle graffe!
      param1: value,
      param2: value,
    }),
  },
}
```
^^ Così passo _anche_ tutti i default delle proprietà

https://github.com/vuejs/vue/issues/1032#issuecomment-120212888

```
props: {
  arr: {
    type: Array,
    default: () => []
  }
}
```

---------------------------

## Vue UI

`vue ui`: fa partire la UI di vue cli 3 e le sue configurazioni
`vue create my-project`: nuova sintassi per creare un progetto con vue cli 3

---------------------------

## Nuxt

_cose che ho scoperto_
- non posso aprire 2 tab con due progetti e far andare entrambi con “npm run dev”
- dentro layout/defaults.vue ci vanno le parti comuni a tutta l’app (es. header)
- build pagine statiche --> search/michelangelo + search/giotto (array di rotte) https://nuxtjs.org/api/configuration-generate#routes
- mettere gli head in ogni pagina
```
export default {
  head: {
    title: 'This is the about page',
    meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'My about page'
        }
      ]
    }
}
```
- layout (es. dark) -> attenzione che se ne può utilizzare soltanto uno (dark fa sparire header)
- utilizzare assets oppure static
- error page 404 --> layouts > error.vue, entra in funzione con validation quando scrivo results/numero
- transition -> ok, ma non si possono applicare tra differenti layout

- nuxt non ha il main.js come le app vue, quindi quello che metterei nel main.js devo metterlo nei plugins (vedi veronica30)
- nuxt arriva già con l'integrazione vue-loader per i preprocessors, quindi basta fare l'install [https://nuxtjs.org/faq/pre-processors/](https://nuxtjs.org/faq/pre-processors/) senza configurare niente su webpack  (webpack.config.js non c'è)
## Toggle state

```html
:class="isMenuOpen ? 'is-menu-open' : ''"
```

```js
data () {
  return {
    isMenuOpen: false,
  }
},

methods: {
  /**
  * Toggles the menu status
  * @param {Event} e - Vue passes the event
  * @param {Boolean} val - Forces the menu to take the val status
  * Usage:
  *  - toggleMenu() -> val is not passed, toggle the isMenuOpen state
  *  - toggleMenu(false) -> val is false, set the isMenuOpen
  *  - toggleMenu(true) -> val is true, set the isMenuOpen
  */
  toggleMenu (e, val) {
    this.isMenuOpen = (val !== undefined) ? val : !this.isMenuOpen
    document.body.classList.toggle('is-body-fixed', this.isMenuOpen);
  },
},
```

## Vue inspect

`vue inspect` > `webpack.config.js` (crea un file che corrisponde esattamente a quello che crea vue-cli per me)

- `vue inspect > webpack.config.js` : compila la config di vue e la mostra in webpack
- vue config → finiscono nella configurazione di webpack
- usa in ordine `vue.config.js`
- poi usa `styleguidist.config.js`
- cerca `webpack.config.js`

## Traduzioni

Vue i18n → modulo di traduzione

- `$t(key)` es. `$t('place')` → conversione traduzioni
- `$d(date)` es. `$d('2020-03-04')` → conversione date


## Favicon

- aggiungere una emoji come favicon

[https://emojipedia.org/whatsapp/2.19.352/cat-face/](https://emojipedia.org/whatsapp/2.19.352/cat-face/)
(nuxt)

```html
link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/whatsapp/238/cat-face_1f431.png',
      },
    ],
```
