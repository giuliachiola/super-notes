# Mustache cheatsheet

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

[Mustache cheatsheet · GitHub](https://gist.github.com/Dammmien/5f0bff8643cb931da7e9495f782aad0a)

### Basic tag

```
  Hello {{name}} !!
```

### Comments

```
  {{! This is a comment, and it won't be rendered }}

```

### Loop through a list of items

```
{{#list}}
  {{property}} // item.property
  or
  {{.}} // item
{{/list}}
```

Es: quando dobbiamo iterare su un array di stringhe, si usa la keyword di mustache `.`

```json
"keywords": [
"Scoped CSS components (BEMIT)", "Pattern library", "Progressive enhancement", "Refactoring", "VueJS", "Docker"
]
```

```html
<ul>
  {{#info.keywords}}
  <li>{{ . }}</li>
  {{/info.keywords}}
</ul>
```

### Show a block if a variable is falsy, an empty list or a function returning a falsy value

```
{{^variable}}
  variable is a falsy or an empty list
{{/variable}}
```

### Show a block if a variable is truthy or a function returning a truthy value

```
{{#variable}}
  variable is truthy
{{/variable}}

```

### Import / include another template

```
{{> header}}

```

ATTENZIONE

### Render unescaped HTML

```
{{{<span>unescaped</span>}}} or {{&<span>unescaped</span>}}
```

---

PASSARE UN VALORE (CHECK IF OK)

```html
{{ > organisms-entry-header className='c-entry-header--condensed' }}
```
