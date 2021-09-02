# Pattern libraries compare

In comune:
✅sidebar componenti raggruppati atomi/elementi.. in base alle sottocartelle
✅render componenti

## PatternLab

![pl](uploads/337148e93bbe005c26889a587554f471/pl.png)

### PRO
✅le varianti le genera lui: basta creare un file JSON  con lo stesso nome seguito dal modifier
```
button.twig

button.json
button~lined.json
```

✅mostra il codice twig -> render html
✅supporta twig e mustache
✅scrive in automatico in quali componenti è incluso, e quali componenti include
✅i componenti sono fluidi, la presentation è responsive

### CONTRO
❌la barra di navigazione orizzontale in alto è scomoda
❌utilizza file JSON di dati, e non file JS (molto più versatile per randomizzazione, inserimento commenti, funzioni, mixin)
❌JSON `pages > template > organisms > elements > atoms` con il grosso limite che fa un merge quindi le proprietà di un atomo che non voglio a livello di organismo devo annullarle, e poi il JSON devo ripeterlo per ogni livello.
❌non esiste un posto dove vedere la documentazione generica
❌la documentazione dei componenti può esserci (file markdown), ma è sacrificata in uno spazio minuscolo vicino al render html
❌molto rigido, poco-niente customizzabile

<hr>

## Fractal
Esempio: [Emmaboshi 2019 Styleguide](http://localhost:3000/components/detail/cards-grid--default)

![fractal](uploads/c6efe0ed11a3e1be8c98677f4bc12744/fractal.png)

### PRO
✅(1) le varianti le genera lui: basta aggiungerle dentro all'array nel file `[componente].config.js`
✅(1) utilizza file di configurazione JS e non JSON
✅(2) barra di navigazione molto comoda:
 - html (compilato)
 - view (twig)
 - context (dati che vengono passati da `[componente].config.js`)
 - assets (file di documentazione, system path)
 - info (info generate da Fractal)
 - notes (note per ogni variante dentro `[componente].config.js`)

✅(3) si può vedere il componente in insolation mode fuori dal frame
✅(4) possibilità di etichettare il componente (es. "todo", "wip", "ready")
✅come PL, i componenti sono fluidi, la presentation è responsive

### CONTRO
❌rigida la procedura di `include`, bisogna passargli tutte le variabili
```
<li class="o-cardsGrid__item">
      {% render '@card' with {
        modifier: '',
        img: card.img,
        customColor: card.customColor,
        title: card.title,
        abstract: card.abstract,
        link: card.link
      } %}
    </li>
```

❌a livello di template (ma anche di organismi complessi) la compilazione è davvero lenta

<hr>

## Styleguidist

Esempio: S. Guida Tv

![styleguidist](uploads/f0933d02e85376d969e0e6a78e5d5302/styleguidist.png)

### PRO
✅(1) cartella di documentazione generica (file markdown dentro `/docs`)
✅(2) searchbar per di cercare un componente per nome
✅(3) documentazione specifica del componente / della variante (in markdown, dentro i tag `<docs>` in JS Docs)

### CONTRO
❌non dice in automatico quale componente è incluso dentro un altro
❌non si riesce a taggare un componente come "Todo", "wip", "ready"
❌non si può vedere il componente in insolation mode fuori dal frame
❌la presentation non è responsive

<hr>

# Recap dei PRO

_Presentation_
- sidebar componenti raggruppati atomi/elementi.. in base alle sottocartelle
- searchbar per di cercare un componente per nome
- render componenti
- mostra il codice twig/pug/mustache -> render html
- possibilità di visualizzare il componente fuori dal frame
- possibilità di etichettare il componente (es. "todo", "wip", "ready")
- i componenti sono fluidi, la presentation è responsive

_Context_
- varianti generate in automatico con un file di configurazione (PL/Fractal)
- utilizzare un file di configurazione JS e non JSON
- scrive in automatico in quali componenti è incluso, e quali componenti include

_Documentazione_
- cartella di documentazione generica (file markdown dentro `/docs`)
- documentazione specifica del componente / della variante (in markdown, dentro i tag `<docs>`  in JS Docs)
