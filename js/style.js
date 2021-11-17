

function navigationButton(){
    $('.navigation-button').click(function(){
        $(".navigation-list-outer-wrapper").slideToggle(400);
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let mask = document.getElementsByClassName("mask");
        let section = document.getElementsByClassName("landing-section");
        mask[0].style.height= "110vh";
        section[0].style.height ="110vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }

    let subcaption = document.getElementsByClassName("content-sub-caption");
    let description = document.getElementsByClassName("content-description-caption")
    let contentSection = document.getElementsByClassName("landing-page-content-section");

    if(window_width>320 && window_width<=768 && window_height == 838){
        contentSection[0].style.marginTop = "8vh";
    }

    let landingPageSection = document.getElementsByClassName("landing-section");
    if(window_width>1860){
        contentSection[0].style.marginTop = "90px"
        //alert(landingPageSection[0].offsetHeight);
    }
   
}

function cardButtons(){
    
    $(".btn-1").click(function(){
        $(".waxing-section-one").show();
        $(".waxing-section-two").hide();
      
    });

    $(".btn-2").click(function(){
        $(".waxing-section-one").hide();
        $(".waxing-section-two").show();
    });

   

    //masssage buttons

    $(".massage-btn-1").click(function(){

        $(".massage-section-one").show();
        $(".massage-section-two").hide();
        $(".massage-section-three").hide();
        $(".massage-section-four").hide();

    });

    $(".massage-btn-2").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").show();
        $(".massage-section-three").hide();
        $(".massage-section-four").hide();
        
    });

    $(".massage-btn-3").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").hide();
        $(".massage-section-three").show();
        $(".massage-section-four").hide();
        
    });

    $(".massage-btn-4").click(function(){

        $(".massage-section-one").hide();
        $(".massage-section-two").hide();
        $(".massage-section-three").hide();
        $(".massage-section-four").show();
        
    });


    //buttons for the kiddies section 

    $(".kids-btn-1").click(function(){

        $(".kids-section-one").show();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-2").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").show();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-3").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").show();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-4").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").show();
        $(".kids-section-five").hide();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-5").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").show();
        $(".kids-section-six").hide();
        
    });

    $(".kids-btn-6").click(function(){

        $(".kids-section-one").hide();
        $(".kids-section-two").hide();
        $(".kids-section-three").hide();
        $(".kids-section-four").hide();
        $(".kids-section-five").hide();
        $(".kids-section-six").show();
        
    });

    //gallery section coding for buttons
    $(".massage-gallery-btn").click(function(){
        $(".massage-gallery-section").show();
        $(".nails-gallery-section").hide();
        $(".outdoor-gallery-section").hide();
    })

    $(".nails-gallery-btn").click(function(){
        $(".massage-gallery-section").hide();
        $(".nails-gallery-section").show();
        $(".outdoor-gallery-section").hide();
    })

    $(".outdoor-gallery-btn").click(function(){
        $(".outdoor-gallery-section").show();
        $(".massage-gallery-section").hide();
        $(".nails-gallery-section").hide();
    })

}

navigationButton();
styling();
cardButtons();