# Gitlab project migration

## Migrate projects from GitLab work account to personal account

- Go to the project folder and check remote

```
git remote -v
```

```
 ~/Sites/giulia/my-workout > develop > git remote -v
origin	git@gitlab.com:giuliachiola/my-workout.git (fetch)
origin	git@gitlab.com:giuliachiola/my-workout.git (push)
```

- Create a new GitLab project on your _personal_ account

https://gitlab.com/dashboard/projects > `New project` > `Create project` (create it empty!)

- Go to your terminal, and update the remote url

```
git remote set-url origin git://new.url.here
```

Note that you want to use your personal mail host `git@gitlab-GMAIL`

```
git remote set-url origin git@gitlab-GMAIL:giuliach/my-workout.git
```

Now `git remote -v` should returns the new repo url

```
 ~/Sites/giulia/my-workout > develop > git remote -v
origin	git@gitlab-GMAIL:giuliach/my-workout.git (fetch)
origin	git@gitlab-GMAIL:giuliach/my-workout.git (push)
```

- Config the new email for this repository

```
git config user.email [my_email]
```

- Push all local branches

```
git push origin --all
```

- Check on GitLab that the project is effectively up-to-date
