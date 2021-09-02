# Architettura AEM

Editore crea una pagina

- author: parte che usano gli editor
- gestione delle immagini, testi, articoli..
- viene presentata con il WYSWYG (vestita con i contenuti che gli editor mano a mano scrivono)
- quando l'editor pubblica un contenuto, l'author parla con il publisher → che raccoglie tutte le informazioni per generare la pagina (es. news correlate, tag, sezione, struttura delle sezioni..)
- pulisher: prende tutte le parti del template in sighly e genera l'HTML compilato
- pug + context = publisher (prendere entità editoriali per comporre la pagina e product HTML) e la passa al dispatcher
- il publisher ha gli include di sightly → risolti quando il publisher risolve la pagina come i partials di pug/twig/ecc. Un include qui una volta che la pagina è pubblicata, è stata staticizzata.
- Per adesso include del critical CSS fatto così.
- dispatcher: handler (processo che fa una roba = maneggia richieste di un determinato tipo) di Apache che cacha le pagine generate dal publisher, le invalida (quando serve rimuove la pagina cachata, e chiede al publisher di rigenerare quella pagina lì), salva le pagine HTML in un disco
- il dispatcher ha il server side include → sintassi basata sui commenti che viene eseguita su Apache, l'include passa come se fosse del testo e quando Apache serve la pagina chiede al dispatcher la pagina aggiornata 
- vorremmo fare il critical a questo livello

Utente chiama il sito dal browser
- chiamo una pagina
- la chiamata arriva al web server (Apache, potrebbe essere nginx)
- server → dei jpg se ne occupa lui (li prende e li da), gli HTML li chiede al dispatcher
- dispacher: cerca se ce l'ha già, se non c'è la chiede al publisher → il publisher la pubblica chiedendo all'author tutto quello che gli serve, e la da al dispatcher

Note:
- publisher e publish sono sulla stessa macchina? se lo sono, sono più lente
