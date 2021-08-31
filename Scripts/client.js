// "$" means "hey, JQuery, (do something) "
$( document ).ready( onReady );

function onReady(){
    console.log( 'JQuery is Ready!' ); // using backtick, not single quotes
    showText();
} // end onReady

function showText(){
      // targe an element and put some text in it.
    // target an element and hold it in a variable
    let el = $( '#hello' ); // # = id
    el.empty(); // empty target "el" variable ('thingy' from html doc )
    el.append( 'Hello, world!'); // append text into el
} // end showText

function getText(){
    // target an element by ID and get its .val()
    let texter = $( '#textIn' ).val();
    // console log the value
    console.log( `You typed:`, texter )
} // end getText