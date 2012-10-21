BEM.DOM.decl('loading-widget', {

    onSetMod: {

        'js' : {

            'inited' : function() {

                $.getJSON(
                    '../../blocks-desktop/database/database.json',
                    function(data) {
                        console.log(arguments);
                    }
                )

            }

        }

    }

});
