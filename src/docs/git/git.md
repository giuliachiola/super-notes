# Git
## Commit message di un solo branch

1. (posso essere su qualsiasi branch)

`git log develop..branchname --pretty="format:%s"`

```bash
master > git log develop..feature/168-archive-item-external-links --pretty="format:%s"fix: add archive item padding bottom
style: add comments to archive item styles
feat: add archive item v-if conditional to check if properties exist
feat: add archive item external links styles
feat: add two items in links array in documents items
feat: add external link in docs archive item
```

2. (devo essere sul branch di cui voglio l’output)`git cherry -v develop`^^ più comodo perché non devo riscrivere il nome del branch

```bash
feature/168-archive-item-external-links > git cherry -v develop+ 41b471fc80c7c6a0d745f2d15197eed8205b9248 feat: add external link in docs archive item
+ ba85bc2d919a07fc03a974dca44c5397974c8295 feat: add two items in links array in documents items
+ efc2053afd821cd626d68fbab4b84be877bc61c8 feat: add archive item external links styles
+ 7c1a88c80a945eb38a9c04b5db7552c2e2331596 feat: add archive item v-if conditional to check if properties exist
+ 73b6ba539a1c24993c517741da8da2e595fad12c style: add comments to archive item styles
+ cba6d441daa6ff05d92e6f7f40ac9a1c8a98c0a3 fix: add archive item padding bottom
```

> git cherry: find commits not merged upstream

[https://devhints.io/git-log](https://devhints.io/git-log)

[https://devhints.io/git-log-format](https://devhints.io/git-log-format)

[https://regex101.com/r/QqbbOj/1](https://regex101.com/r/QqbbOj/1)

----

## Install a forked repo

Installare da un repo forkato `npm install <ghusername>/<repoName>#branchName`
→ [https://github.com/giuliachiola/eleventy-plugin-social-images](https://github.com/giuliachiola/eleventy-plugin-social-images) forse no! provare così: 
`npm install [https://github.com/giuliachiola/eleventy-plugin-social-images#feature/add-custom-selectors](https://github.com/giuliachiola/eleventy-plugin-social-images#feature/add-custom-selectors)`

## GitLab

diff tra due commit

[https://github.com/giuliachiola/super-snippets/compare/f8db18bf...0061298](https://github.com/giuliachiola/super-snippets/compare/f8db18bf...0061298)

### Revert commits

`git log` → guardo l'hash della commit (l'ultimo) e poi

`git revert <commit hash>`


### Squash last commits

git → aggiungere "squashare le ultime 3 commit"

```jsx
git reset --soft HEAD~3 &&
git commit
```
