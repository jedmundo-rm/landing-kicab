jQuery(function($){

    function headerTexts(button,text,hiddentext) {
        $(hiddentext).hide();
        $(button).click(function () {
            $(text).toggle();
            $(hiddentext).toggle();
            $(this).toggleClass("activebutton");
        });
    }
    headerTexts(".btn1","#text1","#hidden1");
    headerTexts(".btn2","#text2","#hidden2");
    headerTexts(".btn3","#text3","#hidden3");



   
    $("#menu img").click(function(){


    });


    var action = 1;

    $("#menu img").on("click", viewSomething);

    function viewSomething() {
        if ( action == 1 ) {
            $(this).attr("src", "./img/cerrar.svg");
        action = 2;
        } else {
        $(this).attr("src", "./img/menu.svg");
        action = 1;
        }
    }


});