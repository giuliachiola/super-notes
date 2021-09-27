# chmod

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

## chmod

`-[rw-][---][---]` (si divide a gruppi di 3)
primo trattino: directory or file

gruppo 1: (prime 3 cifre) utente

gruppo 2: gruppo

gruppo 3: altri

`r` = puoi leggerlo

`w` = puoi scriverlo

`x` = puoi eseguirlo → sulle directory permette di attraversarle

`u` = user
`g` = group

`o` = others

`chmod u+w-x`
`u` = user
`+w` = aggiungi w
`-x` = togli x

chmod 7 = 4 + 2 + 1
r w x
2^2 2^1 2^0

chmod 5 0 0
u (0 = togli permessi)
r=4
w=2
x=1
