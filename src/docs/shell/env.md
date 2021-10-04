# Environment variables

Show local environment variables:

```shell
env
```

will output something like this

```shell
LOGNAME=giulia
ZSH=/Users/giulia/.oh-my-zsh
PAGER=less
NVM_DIR=/Users/giulia/.nvm
```

Each variable has `KEY=VALUE` (note that key is in uppercase).

## `.env`

Example:

```shell
# .env

DB_USERNAME=username123
```


<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

### Dot env

> Loads environment variables from `.env` to `getenv()`, `$_ENV` and `$_SERVER` automagically

- twig (craft) utilizza `getEnv()` per prendere le variabili dall' `.env`
- mentre `dotenv` ce l'ha già Vue integrato [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)

### Logger

logger → wrappano il `console.log()`
