```json
"scripts": {
  "_____________________________SVG_____________________________": "",
  "clean:svgo": "rimraf src/svg/svgo/*",
  "svg:optimize": "npm run clean:svgo && node scripts/svgo.js",
},
```

Folder structure

```shell
├── src
│   ├── svg
│   │   ├──  original
│   │   ├──  svgo
```
