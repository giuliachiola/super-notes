# Generate automatic sidebar

To create a sidebar into `docs/` folder, run

```shell
npm run auto-sidebar
```

<!--
extended command:

```shell
node_modules/.bin/docsify-auto-sidebar -d docs
```
-->

- move `src/docs/_sidebar.md` file in the root folder
- in `_sidebar.md` replace all `(/` with `(/src/docs/`
