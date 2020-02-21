$(document).ready(function () {
    $(function () {
        $(".datepicker").datepicker({
            showOn: "button",
            buttonImage: "img/calendar1.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    });
    $(function() {
        var header = $('header');
        var backgrounds = new Array(
        'url(img/background0.jpg)',
        'url(img/catrel.jpg)'
        );
        var current = 0;
        
        function nextBackground() {
        header.css(
        'background',
        backgrounds[current = ++current % backgrounds.length]
        );
        
        setTimeout(nextBackground, 15000);
        }
        setTimeout(nextBackground, 15000);
        header.css('background', backgrounds[0]);
        });
    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            console.log("bas de page");
            $("#voiture").append('<div id="scroll_voiture">' +
                '<div id="voiture_1">' +
                '<img src="img/vehicule1.png" alt="voiture" class="img-fluid">' +
                '</div>' +
                '<div id="voiture_2">' +
                '<img src="img/vehicule2.png" alt="voiture" class="img-fluid">' +
                '</div>' +
                '<div id="voiture_3">' +
                '<img src="img/vehicule3.png" alt="voiture" class="img-fluid">' +
                '</div>' +
                '<div id="voiture_4">' +
                '<img src="img/vehicule4.png" alt="voiture" class="img-fluid">' +
                '</div>' +
                '</div>');
        };
    }
})