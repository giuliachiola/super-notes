# oh-my-zsh

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

Configurazione base giulia dopo aver aggiornato zsh da capo

```sh
# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="agnoster"

plugins=(git git-flow osx z zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# User configuration

export PATH="/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin"

# aliases

alias gbuu='git branch --unset-upstream'
alias gbD='git branch -D'
alias gbm='git branch -m'
alias gpr='git push --force-with-lease'

# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
autoload -U add-zsh-hook
load-nvmrc() {
  if [[ -f .nvmrc && -r .nvmrc ]]; then
    nvm use
  elif [[ $(nvm version) != $(nvm version default)  ]]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```
