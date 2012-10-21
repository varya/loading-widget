BEM.DOM.decl('loading-widget', {

    onSetMod: {

        'js' : {

            'inited' : function() {

                var lWidget = this;

                var getLinks = function(cat, subCat) {

                    var link = '../../blocks-desktop/database/_' + cat + '/database_' + cat + '_' + subCat + '.json';

                    lWidget.findElem('urls').remove();
                    lWidget.setMod(lWidget.elem('loader'), 'visibility', 'visible');

                    $.getJSON(
                        link,
                        function(data) {
                            lWidget.delMod(lWidget.elem('loader'), 'visibility');
                            BEM.DOM.append(lWidget.domElem, BEMHTML.apply({
                                block: 'urls',
                                mix: [ { block: 'loading-widget', elem: 'urls' } ],
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
                        BEM.DOM.prepend(lWidget.domElem, BEMHTML.apply({
                            block: 'category',
                            categories: data
                        }));
                        BEM.DOM.append(lWidget.domElem, BEMHTML.apply({
                            block: 'submit'
                        }));
                    }
                )

            }

        }

    }

});
