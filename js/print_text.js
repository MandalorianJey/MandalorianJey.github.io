$(document).ready(() => {
    function printText( el ){

        let letterTimeout = 125

        let text = el.innerHTML
        let i = 1

        let print__fn = function(){

            if( i <= text.length ){
                el.innerHTML = text.substr( 0, i );
                setTimeout( arguments.callee, letterTimeout );
            }

            i++;
        }

        print__fn()
    }
    let el = document.getElementById( 'ii' )
    printText( el );
})
