// "$" means "hey, JQuery, (do something) "
$( document ).ready( onReady );

function onReady(){
    console.log( 'JQuery is Ready!' ); // using backtick, not single quotes
    // targe an element and put some text in it.
    // target an element and hold it in a variable
    let el = $( '#hello' ); // # = id
    el.empty(); // empty target "el" variable
    el.append( 'Hello, world!'); // append text into el
} // end onReady