function navigationButton(){
    $(".navigation-button").click(function(){
        $(".sm-navigation-list-wrapper").toggle();
    });
}


function navigationList(){
    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let list = document.getElementsByClassName("sm-navigation-list");
        list[0].style.top = "85vh";
       
        //welcome_caption[0].style.fontSize = "14pt";
    }

}
navigationList();
navigationButton();