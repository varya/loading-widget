BEM.DOM.decl('loading-widget', {

    onSetMod: {

        'js' : {

            'inited' : function() {

                var lWidget = this;

                var getLinks = function(cat, subCat) {

                    var link = '../../blocks-desktop/database/_' + cat + '/database_' + cat + '_' + subCat + '.json';

                    $.getJSON(
                        link,
                        function(data) {
                            BEM.DOM.append(lWidget.elem('urls'), BEMHTML.apply({
                                block: 'urls',
                                urls: data
                            }));
                        }
                    )

                }

                $('body').on('change', '.category', function(e){

                    var sel = $(e.target),
                        cat = sel.find('option:selected').parent('optgroup').attr('label'),
                        subCat = sel.val();

                    getLinks(cat, subCat);


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
