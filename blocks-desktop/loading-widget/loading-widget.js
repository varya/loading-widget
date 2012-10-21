BEM.DOM.decl('loading-widget', {

    onSetMod: {

        'js' : {

            'inited' : function() {

                var lWidget = this;

                $('body').on('change', '.category', function(){
                    console.log(arguments);
                })

                $.getJSON(
                    '../../blocks-desktop/database/database.json',
                    function(data) {
                        BEM.DOM.append(lWidget.domElem, BEMHTML.apply({
                            block: 'category',
                            categories: data
                        }));
                    }
                )

            }

        }

    }

});
