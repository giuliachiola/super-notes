# CSS

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

## SASS watch

```
sass --watch scss/main.scss:css/main.css
browser-sync start --server --files "css/*.css”
```

## Display properties

- HTML: altezza basata sul content `display: block`
- `display: inline-block` altezza → determinata dal contenuto (padding e margin top/bottom contano)

`display: inline`
altezza → determinata _solo_ dalla `line-height` (padding top/bottom non contano)

## z-index

(Remember that in order for an element’s z-index value to have an effect, its position must not be static. This is what creates a new stacking context, giving any children of the element a stacking order specific to its parent.)

## Sass SVG filters

- encodato `encodeURI(svg)` -> sostituisce solo alcuni caratteri (es. ' ' = %20, # = %23) quindi alcuni caratteri aumentano, altri restano invariati. Se SVG grande conviene, altrimenti se SVG piccolo potrebbe non convenire
- base64 -> riduce numero di caratteri a 7 bit quindi rapporto 7 bit / 8 bit

## CSS grid

<!-- TODO: blog -->

display grid → non ha un default di larghezza al 100% quindi la larghezza del nodo è dovuto dal suo contenuto

non si sta spaziando al 100% perché

- computa i gap 20\*11 buchi
- con 1fr dovrebbe calcolarsi lo spazio rimanente e dividerlo per 12
- PERO' con margin spingono verso l'interno quindi il contenitore vuoto non risulta nulla da suddividere

## Sass vars & CSS vars

<!-- TODO: blog -->

Non posso usare css vars mescolate con sass functions

```html
$co_palette-1: #ef476f; $co_palette-2: #ffc233; $co_palette-3: #06d6a0;
$co_palette-4: #1b98e0; $co_palette-5: #ff9f1c; $co_color-main: black; :root {
--co_palette: #{$co_color-main}; --co_palette--lighten:
#{lighten($co_color-main, 10%)}; --co_palette--opacity: #{rgba($co_color-main,
0.1)}; // Define CSS vars colors to be used below: --co_palette-1:
#{$co_palette-1}; --co_palette-2: #{$co_palette-2}; --co_palette-3:
#{$co_palette-3}; --co_palette-4: #{$co_palette-4}; --co_palette-5:
#{$co_palette-5}; } @for $i from 1 through 5 { .t-palette-color--#{$i} {
--co_palette: --co_palette-#{$i}; --co_palette--lighten:
#{lighten(--co_palette-#{$i}, 10%)}; // --co_palette--opacity:
#{rgba(--co_palette-#{$i}, 0.1)}; } }
```

error

```html
$color: "--co_palette-1" is not a color for `lighten'
```

## Sass meister

SassMeister supporta

```
sass-mq
```

[https://www.sassmeister.com/](https://www.sassmeister.com/)

```sass
@import 'mq';$mq-breakpoints: (
    tablet : 768px,
    desktop: 1024px,
);
```

## Before content SVG

```scss
content: url("data:image/svg+xml; utf8, <svg.. code here</svg>");
```

## PostCSS

postcss:
prende il file → transforma in AST → ri-trasforma in stringa (file CSS)

postcss con plugin
prende il file → transforma in AST → utilizza i plugin → ri-trasforma in stringa (file CSS)

preset-env:

- una specie di super plugin
- importa tutti i plugin stage 2
- prendo i tuoi browser e le feature stage 2 → faccio un match dei plugin che ti servono e passo a postcss questi plugin
- decide quali plugins prendere sulla base di browserslist

TODO

- prendere il file
- leggerlo
- passarlo a node-sass → postcss → lo scrivo
