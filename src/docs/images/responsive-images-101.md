# Immagini responsive

```html
<picture class="o-picture-wrapper o-picture-wrapper--16-10">
  <source media="(max-width: 767px)" srcset="/static/hero/image-375x235.jpg 1x, /static/hero/image-750x470.jpg 2x">
  <source media="(min-width: 768px) and (max-width: 1023px)" srcset="/static/hero/image-768x481.jpg 1x, /static/hero/image-1536x962.jpg 2x">
  <source media="(min-width: 1024px)" srcset="/static/hero/image-565x354.jpg 1x, /static/hero/image-1130x708.jpg 2x">

  <img class="lazyload" alt="" src="/static/hero/image-375x235.jpg 1x">
</picture>
```

source
- il browser non prende la prima che matcha ma quella specificata dal dev (vedi tagli editoriali)

img
- fallback per i browser che non capiscono picture (per chi non capisce picture + srcset)
- sia all'interno del picture come caso generale per il taglio che non trovo all'interno della determinata mediaquery
- mettiamo la più grande per coprire tutti i casi

picture
- se capisce picture capisce srcset
- se ci sono tagli editoriali Art direction oppure diverse prorzioni (es. "landscape" e "vertical")
- va in ordine, prende il primo `source` che matcha in qualche modo (matchar = media query e file referenziato.) Per la stessa media query posso mettere una risorsa WebP, e se il browser non lo capisce salta a quello dopo, quindi prima metto le innovazioni e poi i fallback (non rischio di scaricare due volte le risorse)

src
- può avere sempre solo UN path
- si consiglia di mettere JPG desktop 1x

srcset
- separati da virgole ci sono le risorse (path e descriptor delle dimensioni)
- non è importante l'ordine, il browser legge comunque tutti e sceglie quello adatto in funzione dei suoi parametri e di sizes
- elenco di immagini JPG, devo dire al browser quanto sono grandi:
  - sconsigliato: con 1x e 2x
  - consigliato: con `w` quindi se ho un JPG da 750x470 gli dico 750w (larghezza del JPG)
- il browser sceglie solo sul parametro di larghezza, quindi es. non posso fargli scegliere una WebP rispetto ad una JPG

```html
srcset=
 `${imgPath}${hero.fields.img}-375x235.jpg 375w,
  ${imgPath}${hero.fields.img}-750x470.jpg 750w,`
```

esempio completo:

```html
srcset=`${imgPath}${hero.fields.img}-375x235.jpg 375w,
				${imgPath}${hero.fields.img}-750x470.jpg 750w,
				${imgPath}${hero.fields.img}-768x481.jpg 768w,
				${imgPath}${hero.fields.img}-1536x962.jpg 1536w,
				${imgPath}${hero.fields.img}-565x354.jpg 565w,
				${imgPath}${hero.fields.img}-1130x708.jpg 1130w`
```

- img con i srcset:
  - browser che lo capisce, ignora src
  - browser che non lo capisce, ignora srcset e prende src
-------

Esempi project:

```html
<picture>
	<!--[if IE 9]><video style="display: none"><![endif]-->
	<source
		media="(max-width: 767px)"
		srcset="
			{{ imgPath }}/hero/{{ imgName }}-767x190.jpg 1x,
			{{ imgPath }}/hero/{{ imgName }}-1534x380.jpg 2x">
	<source
		media="(min-width: 768px) and (max-width: 1023px)"
		srcset="
			{{ imgPath }}/hero/{{ imgName }}-1199x190.jpg 1x,
			{{ imgPath }}/hero/{{ imgName }}-2398x380.jpg 2x">
	<!--[if IE 9]></video><![endif]-->
	<img
		alt="{{ imgAlt }}"
		class="{{ styleModifier }} lazyload"
		src="{{ imgPath }}/hero/{{ imgName }}-1920x350.jpg"
		sizes="(max-width: 1920px) 100vw"
		srcset="
			{{ imgPath }}/hero/{{ imgName }}-1920x350.jpg 1x,
			{{ imgPath }}/hero/{{ imgName }}-3840x700.jpg 2x">
</picture>
```

1. browser che capisce picture, viewport a 800px
- prende questa (1x o 2x in base al device)
```html
<source
		media="(min-width: 768px) and (max-width: 1023px)"
		srcset="
			{{ imgPath }}/hero/{{ imgName }}-1199x190.jpg 1x,
			{{ imgPath }}/hero/{{ imgName }}-2398x380.jpg 2x">
```

2. browser che NON capisce picture, viewport a 800px
salto qui
```html
<img
		alt="{{ imgAlt }}"
		class="{{ styleModifier }} lazyload"
		src="{{ imgPath }}/hero/{{ imgName }}-1920x350.jpg"
		sizes="(max-width: 1920px) 100vw"
		srcset="
			{{ imgPath }}/hero/{{ imgName }}-1920x350.jpg 1x,
			{{ imgPath }}/hero/{{ imgName }}-3840x700.jpg 2x">
```

e prendo
`src="{{ imgPath }}/hero/{{ imgName }}-1920x350.jpg"`

------

LINKS
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/
https://css-tricks.com/video-screencasts/133-figuring-responsive-images/


----

Esempio pratico EDITORIAL-DS

| Viewport | Resolution | JPG pixel dimension |
|----------|------------|---------------------|
| mobile   | 1x         | 375x235             |
| mobile   | 2x         | 750x470             |
| tablet   | 1x         | 768x481             |
| tablet   | 2x         | 1536x962            |
| desktop  | 1x         | 565x354             |
| desktop  | 2x         | 1130x708            |

```html
img.lazyload(alt=hero.fields.title, src=`${imgPath}${hero.fields.img}-565x354.jpg`
sizes='(max-width: 1024px) 100vw, 46vw' srcset=`${imgPath}${hero.fields.img}-375x235.jpg 375w,
 ${imgPath}${hero.fields.img}-750x470.jpg 750w, ${imgPath}${hero.fields.img}-768x481.jpg 768w, 
${imgPath}${hero.fields.img}-1536x962.jpg 1536w, ${imgPath}${hero.fields.img}-565x354.jpg 565w, 
${imgPath}${hero.fields.img}-1130x708.jpg 1130w`)
```

Se apro un componente nel browser e il box è visivamente 688.69px, il JPG che cerca di prendere è 689x431 (arrotonda al pixel), stando alla tabella il più vicino che matcha sarebbe 750x470 ma io lo sto visualizzando da un retina quindi prendo 1536x962
