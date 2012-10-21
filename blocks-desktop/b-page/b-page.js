/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-page', {

    onSetMod : {

        'js' : function() {

            /* Creating and appending loading-widget block */
            BEM.DOM.append(this.domElem, BEMHTML.apply({
                block: 'loading-widget'
            }));

        }
    }

});

})();
