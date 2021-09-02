# Homebrew

| Command  | Description  |
|---|---|
| `brew list` | show a list of all your installed Homebrew packages |
| `brew list --cask` | (same as above) using using Homebrew Cask |
| `brew leaves` | show you all top-level packages that are not dependencies |
| `brew leaves \| xargs -n1 brew desc` | (same as above) + description |
| `brew deps` | show packages dependencies |
| `brew deps --tree --installed` | (same as above) in a tree view |

Notes:
- brew is for command-line softwares while brew cask is for graphical softwares

Useful links:
- https://apple.stackexchange.com/a/125471
- https://stackoverflow.com/questions/46403937/what-is-the-difference-between-brew-install-xxx-and-brew-cask-install-xxx/46423275#46423275
- https://github.com/Homebrew/homebrew-cask
- https://apple.stackexchange.com/questions/101090/list-of-all-packages-installed-using-homebrew
