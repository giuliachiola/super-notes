# Twig

- Include con variabile

```html
{% set icon = 'molecules-icon-' ~ attachment.icon %}
{% include icon %}
```

- If `defined`

```html
{% if entry.title is defined %}      define -> sintassi1
{% if entry['title'] is defined %}   define -> sintassi2
{% if entry['title'] is not null %}

{% if entry.attachment|length %}  per gli assets
```
