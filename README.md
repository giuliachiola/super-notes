# Super notes

Personal tech notes, not always well organized 😇

| \                | \                                                                                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Deploy status    | [![Netlify Status](https://api.netlify.com/api/v1/badges/3e252c8b-cf42-44c9-b64b-0bb252ea63d1/deploy-status)](https://app.netlify.com/sites/super-notes-giuliachiola/deploys) |
| Deploy preview   | https://super-notes-giuliachiola.netlify.app/#/                                                                                                                               |
| Project typology | Personal                                                                                                                                                                      |

![project preview](docs/project-preview.png)

## 🔥 Tech stack

| Purpose            | Technology                                       |
|:-------------------|:-------------------------------------------------|
| Code snippets      | JS                                               |
| Documentation      | Markdown                                         |
| Presentation layer | [Docsify](https://github.com/docsifyjs/docsify/) |

## 🌊 Run development mode

```shell
# install dependencies
npm i

# serve with hot reload at localhost:3000
npm run dev
```

## 🧳 Build setup

```shell
# build for production
npm run build
```

## 📚 Project documentation

- [Generate automatic sidebar](docs/generate-automatic-sidebar.md)

### 🌿 Branches

I use two main branches, to avoid launching too many deploys on Netlify (one at each git push on main).

| Branch name | Use                      |
|:------------|:-------------------------|
| `main`      | final docs               |
| `deploy`    | docs deployed on Netlify |
