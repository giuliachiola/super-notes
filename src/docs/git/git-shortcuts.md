# Git shortcuts

| Command                                                            | Description                                                                                               |
|--------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------|
| `git commit -am "message"`                                         | add and commit all trakced files                                                                          |
| `git fetch --all --prune`                                          | fetch all remotes, delete remote branches which are dead                                                  |
| `git reset --merge`                                                | abort merge, reset as before (also if there are local commit not pushed yet)                              |
| `git branch --unset-upstream`                                      | remove upstream branch                                                                                    |
| `git reset myfile.js`                                              | remove from staging area                                                                                  |
| `git commit --amend --no-edit`                                     | amend without edit message                                                                                |
| `git checkout -`                                                   | switch to previous branch                                                                                 |
| `git stash -u` or `git stash --include-untracked`                                                   | stash all files (also untracked ones)                                                                     |
| `git reset --soft A`                                               | remove files, but still available in staging area                                                         |
| `git reset --mixed A`                                              | `git reset A` (default) remove files also in staging area, files are available into the working directory |
| `git reset --hard`                                                 | remove files as they never existed                                                                        |
| `git stash clear`                                                  | delete all stashes                                                                                        |
| `git fetch origin; git reset --hard origin/master`                 | restore as remote master branch                                                                           |
| `git log --tags --simplify-by-decoration --pretty="format:%ci %d"` | show tags details                                                                                         |
| `git diff --name-only | uniq | xargs $EDITOR`                      | opens all modified files                                                                                  |
| `git push origin :feature/nomebranch`                              | delete remote branch                                                                                      |
| `git push origin --delete feature/nomebranch`                      | delete remote branch                                                                                      |
| `git push origin --all`                                            | push all local branches                                                                                   |
| `git fetch --prune --prune-tags`                                   | Remove local tags, align tags to remotes                                                                  |

##### oh-my-zsh

| Command | Description                                      | Notes                             |
|:--------|:-------------------------------------------------|:----------------------------------|
| `gb`    | `git branch`                                     | List of local branches            |
| `gba`   | `git branch -a`                                  | List of local and remote branches |
| `gcam`  | `git commit -am`                                 | Add all files to stage and commit |
| `gcmsg` | `git commit -m`                                  | Git commit message                |
| `gco`   | `git checkout`                                   | Change branch                     |
| `gd`    | `git diff`                                       | Files differences in staging      |
| `gfa`   | `git fetch --all --prune`                        | Align local branches to remote    |
| `gl`    | `git pull`                                       | Pull from remote                  |
| `gp`    | `git push`                                       | Push to remote                    |
| `gpsup` | `git push --set-upstream origin [currentbranch]` | Set upstream branch               |
| `gst`   | `git status`                                     | Local files to commit             |
