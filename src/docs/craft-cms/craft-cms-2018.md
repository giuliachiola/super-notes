# Craft CMS 2018

<span style="display: inline-block; background: #FCFFA6; padding: 4px 16px; border-radius: 4px; color: #484848"> ⚠️ Page not updated recently</span>

## Setup Progetto Craft CMS (già iniziato)

- scarico repo gitlab
- vado a vedere nel _nomeprogetto > craft > config > db.php_ come si chiama l’array ‘database’

```
'localhost' => array(
		// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => 'localhost',

		// The name of the database to select.
		'database' => 'dbnamegiulia',
```

- http://localhost/phpmyadmin/ --> crea nuovo --> nome database: `dbnamegiulia`
- tab “importa” > scegli file
- prendere il file da _nomeprogetto > db.bkp > prendere l’ultimo zip disponibile_ > esegui
- http://localhost/dbnamegiulia/dbnamegiulia/

## Setup Progetto Craft CMS (nuovo)

- creo repo su gitlab e me lo clono in locale
- scarico craft cms
- prendo la cartella “craft” e la metto sotto alla cartella del progetto
- sposto i file in modo da avere questa struttura

```
nomeprogetto
|- craft/
   |- index.php
   |- htaccess
   |- readme.txt
   |- robots.txt
```

- index.php cambio il puntamento alla cartella craft `$craftPath = '../craft';` --> `$craftPath = './craft';`
- vado in _craft > config > db.php_
  e aggiungo il nome al db

```
// The name of the database to select.
'database' => 'crafttest01',
...
// The database password to connect with.
'password' => 'root',
```

- http://localhost/phpmyadmin/ > crea nuovo db > nome: crafttest01 (quello che ho messo sopra^)
- http://localhost/z/craft-test-01/index.php/admin/install (dopo localhost mettere percorso cartella)
- installare
- http://localhost/z/craft-test-01/index.php/admin/dashboard
