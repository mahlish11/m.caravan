(function() {
    
    // get references to select list and display text box
    var sel = document.getElementById('country');
    var el = document.getElementById('phone');


    function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    // assign onclick handlers to the buttons
    document.getElementById('next3').onclick = function () {
        el.value = sel.value;    
    }
    }());

// $(document).ready(function(){
    