# Performance

## Browser Storage

**Local Storage**: data persists until you decide to remove it.
**Session Storage**: data only persists during your session. Every time you create a new session, the session storage will be wiped out.

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

#### Cache control

`Cache-Control: max-age=600, stale-while-revalidate=30`

> indicates that it is fresh for 600 seconds, and it may continue to be
> served stale for up to an additional 30 seconds while an asynchronous
> validation is attempted. If validation is inconclusive, or if there
> is not traffic that triggers it, after 30 seconds the stale-while-
> revalidate function will cease to operate, and the cached response
> will be "truly" stale (i.e., the next request will block and be
> handled normally).

#### Analysys

JS

- deferring (find “defer” in view-source)
- concatenation (find “concat” in view-source)
- caching (check cache-control in google dev tools)

CSS

- critical css
- concatenation (chiamate ci sono su googleDevTools e waterfall?)
- caching (check cache-control in google dev tools)

IMAGES

- lazy loading
- compression
- responsiveness
- progressive
- caching (check cache-control in google dev tools)

FONT

- subsetting
- local storage (check if google fonts)
- prefetching
- font stack
  — Perché dei font non ci chiediamo se sono in cache?

Utile:
[Get Started with Analyzing Network Performance in Chrome DevTools  \|  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/network-performance/)

## Time to interactive

- dipende da esecuzione light di JS (non concorrenza eccessiva sul DOM ready, request idle callback su task impegnativi, oppure darli al service worker)
- batch JS sui task prioritari

## First meaningful content

- strettamente legati al no flashing del content
- critical CSS + font

## Fully loaded

- quanto ci mette la carica a caricarsi completamente
- metrica che arriva da SEO in termini di croll budget, se la pagina ci mette molto a caricarsi il crawler fa azioni difensive (se ci metto molto ad arrivare qui, ci vengo meno spesso)

## JS execution time

- ridurre la quota di CPU impegnata ad eseguire JS
- emulatore → analisi sono fatte riducendo le performance del CUP di 1/4
