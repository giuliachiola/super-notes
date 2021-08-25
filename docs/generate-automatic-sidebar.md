# Generate automatic sidebar

To create a sidebar into `docs/` folder, run


```shell
npx docsify-auto-sidebar -d docs
```

extended command: 

```shell
node_modules/.bin/docsify-auto-sidebar -d docs
```

- move this file in the root folder
- in `_sidebar.md` replace all `(/` with `(/docs/`
