function feu() {

    $("[class^='round_']").fadeTo(5, 0.15);
    var feuRouge = $('.round_red'),
        feuOrange = $('.round_yellow'),
        feuVert = $('.round_green'),
        feuTricolore = function () {

            // feu vert pendant 15s
            feuVert.fadeTo(5, 0.95, function () {
                feuVert.delay(15000).fadeTo(5, 0.15, function () {
                    // feu jaune pendant 5s
                    feuOrange.fadeTo(5, 0.95, function () {
                        feuOrange.delay(5000).fadeTo(5, 0.15, function () {
                            // feu rouge pendant 10s
                            feuRouge.fadeTo(5, 0.95, function () {
                                feuRouge.delay(10000).fadeTo(5, 0.15, function () {
                                    feuTricolore();
                                });
                            });
                        });
                    });
                });
            });

        };

    feuTricolore();

};

function Stop() {
    feuRouge = $('.round_red')
    feuOrange = $('.round_yellow')
    feuVert = $('.round_green')
};