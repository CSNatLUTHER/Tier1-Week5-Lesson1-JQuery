// "$" means "hey, JQuery, (do something) "
$( document ).ready( onReady );

function onReady(){
    console.log( 'JQuery is Ready!' ); // using backtick, not single quotes
    // click on a button with an ID, run a function
    $( '#getTextButton' ).on( 'click', getText );
} // end onReady

function showText( textToShow ){
      // targe an element and put some text in it.
    // target an element and hold it in a variable
    let el = $( '#hello' ); // # = id
    el.empty(); // empty target "el" variable ('thingy' from html doc )
    el.append( textToShow ); // append text into el
} // end showText

function getText(){
    // target an element by ID and get its .val()
    let texter = $( '#textIn' ).val();
    $('#textIn' ).val (''); // setter
    // console log the value`
    showText( `You typed: ${ texter }` );
} // end getText