# Nitro

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

`nitro ssh` → entra nella macchina virtuale al mount point
`df`.

## Nitro export DB

```jsx
nitro db backup
  1 - all-dbs
  2 - test1_craft
  3 - test_craft
  4 - nitro
Select database to backup [1] 3
Created backup "test_craft-201109_170401.sql", downloading...
Backup completed and stored in "/Users/giulia/.nitro/backups/nitro-dev/mysql_5.7_3306/test_craft-201109_170401.sql".

mv /Users/giulia/.nitro/backups/nitro-dev/mysql_5.7_3306/test_craft-201109_170401.sql ./_db
```
