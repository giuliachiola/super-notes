# Craft CMS 2020

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

## Fields setup

- documentazione sotto `docs/fields.md`
- in ordine: creare fields, creare section, popolare sections con i fields, creare articoli per controllare di avere tutti i campi

_Convenzioni_

- le global hanno prefisso `global` quindi → `globalInfo`
- le sezioni hanno prefisso `section` quindi → `sectionAbout` , `sectionHomepage`
- per ogni campo che abbia una pagina sulla pattern library, mettere il link allo staging

## templates setup

- dentro `templates`, copiare la cartella `_layout/`
- dentro `pages` → pagine generiche
- mentre i template con struttura custom (about) fare `about/index`.twig

## Componenti

### Style modifiers

```jsx
{% set styleModifier = styleModifier ?? '' %}

<div class="nomecomponente {{ styleModifier }}> ... </div>
```

```jsx
{% include 'component' with { styleModifier: 'c-component--pink' } %}
```

### Immagini (non responsive)

```jsx
<img class="..." src="{{ card.image.one().url }}" alt="{{ card.image.one().title }}">
```

### Immagini (responsive)

```jsx
{% if split.image|default %}
		{% set infoThumbS = { mode: 'fit', width: 345, quality: 90, } %}
		{% set infoThumbM = { mode: 'fit', width: 670, quality: 90, } %}

		<figure class="c-split__figure">
			<img
				sizes=`
					(max-width: 768px) 90vw,
					(max-width: 1024px) 80vw,
					670px
				`
				srcset="
					{{ split.image.one().url(infoThumbS) }} 345w,
					{{ split.image.one().url(infoThumbM) }} 670w
					"
				src="{{ split.image.one().url(infoThumbS) }}"
				class="c-split__img"
				alt="{{ split.image.one().title }}"
				>
		</figure>
	{% endif %}
```

### Check all fields

```jsx
{% if split.splitTitle|default %}
		<h4 class="c-split__title">{{ split.splitTitle }}</h4>
	{% endif %}
```

### Contenuto editoriale

```jsx
{# Contenuto editoriale #}
		{% if entry.editorial|default %}
			{% include "_components/editorial/index.twig" with entry.editorial %}
		{% endif %}
```

- il campo si chiama `editorial`
- bisogna creare una cartella per tutti i componenti editoriali `editorial` dove ci sarà `editorial/index.twig` (con gli if)
- e poi gli altri componenti
  convenzioni dei campi `richText`, `figure`, (altri, es. `split`)

```jsx
{% set styleModifier = styleModifier ?? '' %}
{% set blocks = blocks ?? entry.editorial.all() %}

{% for block in blocks %}

  {% if block.type == "richText" %}

    {% include "_components/editorial/rich-text" with {
        styleModifier: styleModifier
      }
    %}

  {% elseif block.type == "figure" %}

    {% include "_components/editorial/maxi-figure" with {
        styleModifier: styleModifier ~ ' c-editorial--two-cols'
      }
    %}

  {% elseif block.type == "split" %}

    {% include "_components/editorial/split" with {
        styleModifier: styleModifier ~ ' c-editorial--figure'
      }
    %}

  {% endif %}
{% endfor %}
```

- Escludere news che è segnata come highlight

```jsx
{% set allNews = craft.entries().section('sectionShowreel').highlight('not 1').all() %}
```

## Altri appunti

- webserver (va in `/web/` e carica `index.php` (che contiene `$app -> run`) + htaccess

- i template vengono caricati a runtime

utenti del progetto:

1. utenti craft (1password)
2. db (mysql) per parlare dal pc al DB
