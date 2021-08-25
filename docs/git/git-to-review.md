# Git - TO REVIEW!
### Git

**Learning**

_Interactive_  
[Learn Git Branching](http://learngitbranching.js.org/?demo)  
[Git Real](http://gitreal.codeschool.com/levels/1)  
[Try Git](https://try.github.io/)  

_Readings_  
[Git How To](https://githowto.com/)  
[Get git (ita)](http://get-git.readthedocs.io/it/latest/)  
[Git book - Tutorials Point](https://www.tutorialspoint.com/git/git_tutorial.pdf)  
[Git guide](http://rogerdudler.github.io/git-guide/)
[Git immersion](http://gitimmersion.com/)
[Atlassian Tutorial](https://www.atlassian.com/git/tutorials)


_Videos_  
[Learn Git in 20 Minutes - c0deporn](https://www.youtube.com/watch?v=Y9XZQO1n_7c)  
[Learn Git on the Command Line - Tower](https://www.youtube.com/watch?v=M-O8ZNW9icQ&index=1&list=PLyCj4RCToz5DRDx3sJ4iW9i8D2G8OdHYH)  
[Git Tutorials - GitKraken](https://www.youtube.com/playlist?list=PLe6EXFvnTV7_8z5gjobbe9sMjEHNw8_GE)

**Tools**  
[Git Cheat Sheet - GitHub](https://education.github.com/git-cheat-sheet-education.pdf)  
[Explain Shell](https://explainshell.com/explain?cmd=git+push+-u+origin+master)

**Command line instructions (common ones)**

| Setup                                               | --                                                                            |
|-----------------------------------------------------|-------------------------------------------------------------------------------|
| `git help [command]`                                | Mostra documentazione di *command*                                            |
| `git config --list`                                 | Lista delle configurazioni                                                    |
| `git config --global user.name "myusername"`        | Impostare username globalmente (per ogni repository)                          |
| `git config --global user.email "myemail@mail.com"` | Impostare email globalmente (per ogni repository)                             |
| `git config --global push.default matching`         | Push *all branches* from local to remote with the same name                   |
| `git config --global push.default simple`           | Push *only the current* branch (solo il branch da cui ha fatto la pull)       |
| `git init`                                          | Inizializzare un repository                                                   |
| `git clone [urlrepository]`                         | Clonare un repository                                                         |
| `git clone [urlrepository] [foldername]`            | Clonare un repository (cambiando il nome della cartella in cui viene clonato) |

| Status                            | --                                                                                                                        |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `git status`                      | Mostra lo stato corrente (se in locale ho files nuovi/modificati/cancellati rispetto al repository) e in che branch siamo |
| `git status -s`                   | Mostra lo stato corrente, -s = short format > A = added, D = deleted, R = renamed                                         |
| `git add .`                       | Stages everything, *without Deleted* Files                                                                                |
| `git add -u`                      | Stages only *Modified* Files                                                                                              |
| `git add -A`                      | Stages *Everything*                                                                                                       |
| `git add --all`                   | (= `git add -A`) Aggiunge nello staging *tutti* stage files on the whole working tree                                     |
| `git add -A .`                    | Aggiunge nello staging *solo* stage files under the currrent path                                                         |
| `git add /docs`                   | Aggiunge nello staging *tutti* i file nella cartella *docs*                                                               |
| `git add *.ext`                   | Aggiunge nello staging *solo* i file con estensione *.ext*                                                                |
| `git add [filename]`              | Aggiunge nello staging *solo* *filename*                                                                                  |
| `git add -i`                      | Interactive adding (-i = interactive)                                                                                     |
| `git rm [filename]`               | Rimuove dallo staging e *dal working tree* locale *filename*                                                              |
| `git commit -m "message"`         | Impacchetta la commit con le modifiche effettuate in locale, con il messaggio allegato                                    |
| `git commit -a -m "message"`      | Impacchetta la commit con le modifiche effettuate in locale, *cancella* i file che in locale ho cancellato                |
| `git commit -am "message"`        | Add dei file modificati in locale + Remove di quelli rimossi in locale                                                    |
| `git commit --amend -m "message"` | (Locale) Reset dell'ultima commit con quella nuova (Non si può fare se si ha già pushato)                                 |

| Pull / Push / Fetch                       | --                                                                                                         |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------|
| `git fetch origin [branchname]`           | Guarda le differenze tra repo e locale (*download only*)                                                   |
| `git fetch -p`                            | Guarda le differenze tra repo e locale (*download only*) -p= prune (Prune all unreachable objects)         |
| `git pull origin [branchname]`            | Prende le differenze tra repo e locale                                                                     |
| `git push origin [branchname]`            | Lancia nel repo le differenze tra repo e locale (pull = fetch + merge)                                     |
| `git push - u origin [branchname]`        | Lancia nel repo le differenze tra repo e locale (-u = upstream, ricorda i parametri per la prossima volta) |
| `git merge [branchname]`                  | Faccio il merge del branch su cui sono attualmente, dentro a branchname                                    |
| `git merge [branch1] [branch2] [branch3]` | Faccio il merge di più branch contemporaneamente (octopus merge)                                           |
| `git merge --no-ff`                       | Merge (no fast forward)                                                                                    |
| `git merge [commit]`                      | Merge to a specific commit                                                                                 |

| Branches                                | --                                                                |
|-----------------------------------------|-------------------------------------------------------------------|
| `git checkout [branchname]`             | Mi sposto su branchname                                           |
| `git checkout -b [branchname]`          | Creo branchname e mi sposto                                       |
| `git checkout [commitID]`               | Mi sposto su una specifica commit                                 |
| `git checkout [filename]`               | Mi sposto nel punto dove c'era quel file                          |
| `git checkout -- [filename]`            | Hard reset of a single file (lo ripristino se l'ho cancellato)    |
| `git checkout HEAD`                     | Restore last commit                                               |
| `git branch`                            | Elenca i branch *locali*, con * vicino a quello corrente          |
| `git branch -v`                         | Elenca i branch *locali*, con * vicino a quello corrente          |
| `git branch -r`                         | Elenca i branch *remoti*, con * vicino a quello corrente          |
| `git branch -a`                         | Elenca i branch *remoti e locali*, con * vicino a quello corrente |
| `git branch -d [branchname]`            | Delete *local* branch *branchname*                                |
| `git push origin --delete [branchname]` | WARNING! Delete *remote* branch *branchname*                      |
| `git branch -m [oldname] [newname]`     | Rename branch                                                     |

| Log                                                                 | --                                                                              |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------|
| `git log`                                                           | Mostra lo storico delle commit (per uscire: *q*)                                |
| `git log --author:Bob`                                              | Mostra lo storico delle commit solo dell'autore "Bob"                           |
| `git log --stat`                                                    | Mostra lo storico dei files che sono stati modificati                           |
| `git log --oneline`                                                 | Mostra lo storico dei files che sono stati modificati (con scrittura compatta)  |
| `git log --pretty=oneline`                                          | Mostra lo storico dei files che sono stati modificati (con hash non compatto)   |
| `git log [filename]`                                                | Commit history of that file                                                     |
| `git log [directory]`                                               | Commit history of that directory                                                |
| `git log [branchname]`                                              | Commit history of that branch                                                   |
| `git log [branchname] --no-merge`                                   | Commit history of that branch without merge commits                             |
| `git log -[num]`                                                    | Mostra ultime [num] commit (es: git log -2 mostra le ultime 2)                  |
| `git log --reverse`                                                 | Shows commit from start                                                         |
| `git log -S "S. Cinema" -- source/_patterns/04-pages/acquista.json` | Lista di commit dove era presente il testo “S. Cinema” nel file “acquista.json" |
| `git show [commitID]`                                               | git log on a single revision (commit details)                                   |

| Reset / Stash / Revert / Clean | --                                                                                                        |
|--------------------------------|-----------------------------------------------------------------------------------------------------------|
| `git reset --hard HEAD`        | Discard *all* local changes                                                                               |
| `git reset --soft HEAD~1`      | undo the last commit, *keep* the changes in your working  tree *and* the index                            |
| `git reset HEAD~1`             | undo the last commit, *keep* the changes in your working tree *but not* on the index                      |
| `git reset --hard HEAD~1`      | undo the last commit, the changes *won't stay* in your working tree                                       |
| `git reset --hard [commit]`    | undo the until this commit (if it hasn't been pushed yet)                                                 |
| `git reset [filename]`         | remove *filename* from stage                                                                              |
| `git revert HEAD`              | To revert last commit already pushed                                                                      |
| `git revert [badcommitID]`     | Torna indietro allo stato *precedente alla commit* "badcommitID"                                          |
| `git touch [filename]`         | Crea il file *filename*                                                                                   |
| `git stash`                    | Accantona momentenamente le modifiche fatte in locale, per poterle prendere in un secondo momento         |
| `git stash apply`              | Prende le modifiche accantonate e le applica                                                              |
| `git stash save --keep-index`  | Discard unstaged changes in working copy, but not in the index                                            |
| `git stash list`               | Mostra tutti gli stash che ho                                                                             |
| `git stash pop`                | Rimuove gli stash che ho e li mette nella working directory                                               |
| `git diff`                     | Mostra differenze tra il file locale e l'ultima commit                                                    |
| `git diff HEAD`                | Mostra differenze tra il *corrente* e l'ultima commit                                                     |
| `git diff --staged`            | Mostra differenze tra i file che ho appena aggiunto allo *stage* e l'ultima commit                        |
| `git diff --cached`            | Mostra differenze tra i file che ho appena aggiunto allo *stage* e l'ultima commit (sinonimo di --cached) |
| `git diff [filename]`          | Mostra differenze tra il corrente e l'ultima commit                                                       |
| `git clean`                    | (Attention!) Remove untracked files from the working tree                                                 |
| `git clean -n`                 | Show which untracked files from the working tree will be removed                                          |
| `git clean -f`                 | (Attention!) Remove untracked files from the working tree                                                 |
| `git clean -f -d`              | (Attention!) Remove untracked files and directory from the working tree                                   |

| Tag                                  | --                  |
|--------------------------------------|---------------------|
| `git tag [tagname]`                  | Create tag name     |
| `git push origin --tags`             | Push tags to remote |
| `git tag --delete [tagname]`         | Delete local tag    |
| `git push --delete origin [tagname]` | Delete remote tag   |

| Other                                 | --                                                                                                          |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `git grep "[string]"`                 | Cerca file per l'occorrenza di una stringa che fanno match con i pattern                                    |
| `git grep "\.[string]"`               | Cerca file per l'occorrenza di una stringa (serve l'escape carachter se devo cercare anche il punto)        |
| `git remote`                          | elenca i server git remoti > origin                                                                         |
| `git remote -v`                       | elenca i server git remoti e url associato al git > origin git://github.com/blabla (v=verbose)              |
| `git remote show [repositoryname]`    | Mostra i dettagli di quello specifico repository remoto                                                     |
| `git remote add [reponame] [urlrepo]` | aggiunge un altro server remoto (si fa quando si deve si è in vpn e non passa il server in ssh ma in https) |
| `gitk`                                | Mostra solo i commit della linea di sviluppo                                                                |
| `gitk [filename]`                     | Mostra la change history (the content)                                                                      |
| `gitk --follow [filename]`            | Continue listing the history of a file beyond renames (only a single file)                                  |
| `gitk --all`                          | Mostra tutti i commit                                                                                       |

| GIT FLOW                               | --                                                                   |
|----------------------------------------|----------------------------------------------------------------------|
| `git flow init`                        | Inizializza git flow                                                 |
| `git flow feature start [branchname]`  | Start feature (new branch feature/branchname from develop)           |
| `git flow feature finish [branchname]` | Finish feature (merge feature/branchname into develop and delete it) |

**Fast snippets**

_First configuration_

```
git config --global user.name "myusername"  
git config --global user.email "myemail@mail.com"   
git config --global push.default simple  
git config --global color.ui true  
git config --global color.status auto  
git config --global color.branch auto
```

_Change password for super user_
Mac: `sudo passwd root`  
Attenzione: in ambiente Linux la password dell'utente del mac e la password sulla console sono la stessa, perché l'ambiente è uno unico (a differenza di Bash su Windows dove gli ambienti sono due: uno è Windows con il suo utente, e l'altro ambiente è quello virtuale su Bash). Quindi su Mac cambiando la password sul terminale, la si cambia all'utente del computer.

Windows (Bash): `passwd`

_(Local) Undo last commit not pushed yet_

```
git reset HEAD^  
git commit --amend -m "new message"  
git add -u  
git push origin [branchname]
```

_Discard all local changes/commits and pull from upstream_

```
git reset --hard origin/[branchname]  
git pull origin [branchname]
```

_Undo a git add - remove files staged for a git commit_

```
git reset filename.txt
```

_Output of history command in iTerm_

```
cd ~
ls -la | grep .bash_history
cat .bash_history
```
`history`: mostra lo storico dei comandi dati
`history | grep "git log"`: prende soltanto i comandi dati contenenti 'git log'

_Finding diff between current (local) and last versions_
`git diff HEAD^ HEAD`

_Create Git branch with current changes_
(No need to stash)  
`git checkout -b new_branch_name`

_Interactive adding_  
`git add -i`
`a` (add untracked) > `*` (add all) > `q` (quit)

_Spostare file da un branch all'altro_  
`git checkout master`  (get back to master)  
`git checkout branchname -- filename.ext ` (then copy the version of app.js from branch "branchname")  

oppure  
`git checkout master`  (get back to master)  
`git checkout branchname path/to/filename.ext`

_Best (and safest) way to merge a git branch into master_ [stackOverflow](https://stackoverflow.com/questions/5601931/best-and-safest-way-to-merge-a-git-branch-into-master)
```
git checkout master
git pull origin master
git merge test
git push origin master
```

_Other commands_

| Command                                          | Description                                            |
|--------------------------------------------------|--------------------------------------------------------|
| `^`                                              | Una commit alla volta (all'indietro)                   |
| `~<num>`                                         | <num> commit alla volta (all'indietro)                 |
| `HEAD`                                           | Currently checkout commit (dov'è posizionato *)        |
| `-f`                                             | = force, reassign a branch to a commit                 |
| `git [command1] && git [command2]`               | concatenare due comandi git                            |
| `git pull - u [branchname] origin/[branchname] ` | Fa la pull e ricorda i parametri per la prossima volta |
| `git push - u [branchname] origin/[branchname] ` | Fa la push e ricorda i parametri per la prossima volta |
| `git mv [filename] scr/`                         | Move filename in "src" directory                       |

_Difference between git stash pop and git stash apply_  
`git stash pop` throws away the (topmost, by default) stash after applying it (unless there are conflicts after it), whereas `git stash apply` leaves it in the stash list for possible later reuse.

## to review

`gfff -n` non tagga la feature
[https://github.com/nvie/gitflow/wiki/Command-Line-Arguments#git-flow-hotfix-finish--fsumpkn-version](https://github.com/nvie/gitflow/wiki/Command-Line-Arguments#git-flow-hotfix-finish--fsumpkn-version)
n don't tag this release


- remove untracked files `git clean -fd`
