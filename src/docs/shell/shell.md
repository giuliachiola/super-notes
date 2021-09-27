# Shell

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

| Command                               | Description                                             |
| ------------------------------------- | :------------------------------------------------------ |
| `man ls`                              | show manual for command 'ls'                            |
| `wc <file>`                           | word count                                              |
| `rm <file>`                           | remove/delete file                                      |
| `rm -i <file>`                        | remove/delete file (interactive, ask confirm)           |
| `rmdir <directory>`                   | remove/delete directory                                 |
| `rm -R <directory>`                   | remove/delete directory and subdirectory                |
| `rm -iR <directory>`                  | remove/delete directory (interactive)                   |
| `cp <current location> <destination>` | copy files                                              |
| `chmod -R 755 <folder>`               | add writing permission to folder                        |
| `pwd`                                 | present working directory / Print Working Directory     |
| `cd`                                  | change directory                                        |
| `mkdir`                               | make directory                                          |
| `ls`                                  | list files                                              |
| `ls -l`                               | list files (long form)                                  |
| `ls -lah`                             | list files (long form, all also hidden, human readable) |
| `touch [filename]`                    | create file                                             |
| `chown`                               | change owner                                            |
| `cat <file>`                          | show file                                               |
| `<cmd> > <file>`                      | direct the output of "cmd" into "file"                  |
| `grep -rl "<text>" <dir>`             | search for all files containing <text> inside <dir>     |
| `ln`                                  | symbolic link                                           |
| `alias`                               | show available alias on shell                           |
| `cd -`                                | go to previous folder                                   |
| `- `ll -ah`                           | show hidden files                                       |

#### Word count

- word count `wc`

```
wc myfile.txt

5 13 57 myfile.txt
```

5 = number of lines
13 = number of words
57 = number of characters

#### Export LESS

- `export LESS=-RXF` -> se ci sta tutto in una pagina non entra esce dal LESS
  es. git diff -> se ci sta tutto non devo fare Quit

#### Wget

```
wget --header=’referer: https://www.yumpu.com/it/embed/view/LIXgdlY7fTsU82jB' --header=‘Origin: https://www.yumpu.com’ https://img.yumpu.com/58336276/{1..52}/1734x1300/lavspec-sezione5.jpg\?quality\=100
```

se vuoi un PDF: `convert *.jpg corsosicurezza.pdf` da command line se hai imagemagick installato (`brew update && brew install imagemagick`)

### Compare componenti

```
find src -name '*.vue' | egrep '/.+\.vue$' -o
find src -name '*.vue' | egrep '/[^/]+\.vue$' -o | sort | uniq > componenti.txt
find src -name '*.vue' | egrep '/[^/]+\.vue$' -o | sort >  componenti-dup.txt
grep -v -f componenti.txt componenti-dup.txt
grep -v -f componenti-dup.txt componenti.txt
diff componenti-dup.txt componenti.txt
wc -l componenti.txt
```

### Structure tree

Stampa dentro un file txt la struttura delle cartelle
`ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/ /' -e 's/-/|/' > tree.txt`

## Ping

```sass
ping www.google.com
```

## Errori frequenti

Quando non trova un comando globale (errore zsh ecc)

```shell
install it locally and then try to run node_modules/.bin/vuepress dev
```

provare ad installarlo come dipendenza e lanciarlo dai `node_modules`.
