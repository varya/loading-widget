BEM.DOM.decl('loading-widget', {

    onSetMod: {

        'js' : {

            'inited' : function() {

                var lWidget = this;

                var getLinks = function(cat, subCat) {

                    if (subCat === '') return;

                    var link = '../../blocks-desktop/database/_' + cat + '/database_' + cat + '_' + subCat + '.json';

                    lWidget.setMod('loading', 'yes');

                    $.getJSON(
                        link,
                        function(data) {
                            lWidget.delMod('loading');
                            BEM.DOM.replace(lWidget.findElem('urls'), BEMHTML.apply({
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
                        BEM.DOM.append(lWidget.domElem, BEMHTML.apply([
                            {
                                block: 'loading-widget',
                                elem: 'urls'
                            },
                            {
                                block: 'submit',
                                mix: [{
                                    block: 'loading-widget',
                                    elem: 'submit'
                                }]
                            }
                        ]));
                    }
                )

            }

        },

        'loading': {

            'yes' : function() {

                this.setMod(this.elem('loader'), 'visibility', 'visible');
                this.elem('submit urls').attr('disabled', 'disabled');

            },

            '' : function() {

                this.delMod(this.elem('loader'), 'visibility');
                this.elem('submit urls').removeAttr('disabled');

            }

        }

    }

});
