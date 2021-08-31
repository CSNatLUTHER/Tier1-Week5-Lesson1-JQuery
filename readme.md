JQ Into
===

Phase 1: base setup
---

- git init
- create: index.html, client.js in scripts folder, style.css in styles folder
- source: client.js, style.css
- check js/css handshakes
- add/commit
- create a 'vendors' folder
- copy JQ into this folder
- source JQ above client.js in index.html
- JQuery handshake check


in clinet.js:
```
$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ' ); // using backtick, not single quotes
} // end onReady
```