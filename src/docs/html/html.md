# HTML

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

#### CORS

Cross-Origin Resource Sharing is a mechanism that enables many resources (e.g., JavaScript, fonts etc.) on a web page to be requested from another domain outside the domain from which the resource originated. It is a mechanism supported in HTML5 that manages XMLHttpRequest access to a domain different.

## Snippet per togliere tutte le classi dal DOM

```jsx
const sectionTitleShadows = document.querySelectorAll(
  ".c-section-title--shadow"
);
[].forEach.call(sectionTitleShadows, function (title) {
  title.classList.remove("c-section-title--shadow");
});
```
