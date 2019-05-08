
let quoteIndex= [ 
  {
      quote: "Who doesn't love pizza?"
  },
  {
      quote:"Pizza makes any day better."
  },
  {
      quote: "Square cut pizza for the win!"
  },
  {
    quote: "Nothing can't be solved with pizza"
  }
];

var currentQuote;
const v = quoteIndex.length;
var randoIndex;



function randomQuoteGen (){
  let rando =  Math.floor(v*(Math.random()));

  randoIndex=rando;

  currentQuote = quoteIndex[randoIndex].quote;  
}

randomQuoteGen();
$("#pizza-quote").html(currentQuote);



var y = 0;
var w = 0;
var z = 0;
var mobileMenu = "closed";
var d = 0;

/*var checked = false; */





$(document).ready(function(){

  /*

  if(checked){

    $("#collapisble-checkbox label").css({"background":"url(close.svg) no-repeat left center"});

  }

  if(!checked){

    $("#collapisble-checkbox label").css({"background":"url(hamburger-menu.svg) no-repeat left center"});

  }

  */

  

  $("#find-a-pizza a").mouseenter(function(){
    var j = $(this);
    j.addClass("lil-indent");

  })

  $("#find-a-pizza a").mouseleave(function(){
    var j = $(this);
    j.removeClass("lil-indent");
  })



    $(".navlink").mouseenter(function(){
        var x = $(this);
        x.addClass("animated pulse");
        setTimeout(function(){x.removeClass("animated pulse")},800);

        y=y+60;
        w=w-30;
        z++;
        switch(z){
            case 0:
            $("#logo").attr("src","images/wagon wheel cut 1.png");
            $("#left-nav-pizza").attr("src", "images/square cut 1.png");
            break;
            case 1:
            $("#logo").attr("src","images/wagon wheel cut 2.png");
            $("#left-nav-pizza").attr("src", "images/square cut 2.png");
            break;
            case 2:
            $("#logo").attr("src","images/wagon wheel cut 3.png");
            $("#left-nav-pizza").attr("src", "images/square cut 3.png");
            break;
            case 3:
            $("#logo").attr("src","images/wagon wheel cut 4.png");
            $("#left-nav-pizza").attr("src", "images/square cut 4.png");
            break;
            case 4:
            $("#logo").attr("src","images/wagon wheel cut 5.png");
            $("#left-nav-pizza").attr("src", "images/square cut 5.png");
            break;
            case 5:
            $("#logo").attr("src","images/wagon wheel cut 6.png");
            $("#left-nav-pizza").attr("src", "images/square cut 6.png");
            break;
            case 6:
            $("#logo").attr("src","images/wagon wheel cut 7.png");
            $("#left-nav-pizza").attr("src", "images/square cut 7.png");
            break;
            case 7:
            $("#logo").attr("src","images/wagon wheel cut 1.png");
            $("#left-nav-pizza").attr("src", "images/square cut 8.png");
            z=-1;
            break;
            
        }

        $("#logo").css({'transform': 'rotate('+y+'deg)'})
        $("#left-nav-pizza").css({'transform': 'rotate('+w+'deg)'})
  });

  
  $("#collapsible-nav").mouseenter(function(){
    var x = $(this);

    y=y+60;
    w=w-30;
    z++;
    switch(z){
        case 0:
        $("#logo").attr("src","images/wagon wheel cut 1.png");
        $("#left-nav-pizza").attr("src", "images/square cut 1.png");
        break;
        case 1:
        $("#logo").attr("src","images/wagon wheel cut 2.png");
        $("#left-nav-pizza").attr("src", "images/square cut 2.png");
        break;
        case 2:
        $("#logo").attr("src","images/wagon wheel cut 3.png");
        $("#left-nav-pizza").attr("src", "images/square cut 3.png");
        break;
        case 3:
        $("#logo").attr("src","images/wagon wheel cut 4.png");
        $("#left-nav-pizza").attr("src", "images/square cut 4.png");
        break;
        case 4:
        $("#logo").attr("src","images/wagon wheel cut 5.png");
        $("#left-nav-pizza").attr("src", "images/square cut 5.png");
        break;
        case 5:
        $("#logo").attr("src","images/wagon wheel cut 6.png");
        $("#left-nav-pizza").attr("src", "images/square cut 6.png");
        break;
        case 6:
        $("#logo").attr("src","images/wagon wheel cut 7.png");
        $("#left-nav-pizza").attr("src", "images/square cut 7.png");
        break;
        case 7:
        $("#logo").attr("src","images/wagon wheel cut 1.png");
        $("#left-nav-pizza").attr("src", "images/square cut 8.png");
        z=-1;
        break;
        
    }

    $("#logo").css({'transform': 'rotate('+y+'deg)'})
    $("#left-nav-pizza").css({'transform': 'rotate('+w+'deg)'})
});

  $("#side-pizza-image").mouseenter(function(){
    $("#side-pizza").attr("src", "images/square cut 1.png")
    $("#side-pizza").css({"transform": "rotate(33deg)"})
  })

  $("#side-pizza-image").mouseleave(function(){
    $("#side-pizza").css({"transform": "rotate(-20deg)"})
  })

  

  $("#home-click-area").addClass("animated rotateInDownLeft");

  setTimeout(function(){
    $("#home-click-area").removeClass("animated rotateInDownLeft")
    },1000)


    $("#home-click-area").mouseenter(function(){
        var x = $(this);
        x.addClass("animated tada");
        setTimeout(function(){x.removeClass("animated tada")},1500);

        y= y+30;
        w=w-10;
        $("#logo").css({'transform': 'rotate('+y+'deg)'})
        $("#left-nav-pizza").css({'transform': 'rotate('+w+'deg)'})


  });

  $(".nav-link, .mobile-menu-link").mouseenter(function(){
    y= y+15;
    w=w-5;
    $("#logo").css({'transform': 'rotate('+y+'deg)'})
    $("#left-nav-pizza").css({'transform': 'rotate('+w+'deg)'})
   
});


/*

  $("#collapsible-checkbox").click(function(){

    var j = $(this);








    if (checked){

     

      

     

      $("#collapsible-menu-content").slideToggle(500);
      j.prop('checked', false)

    setTimeout(function(){
      mobileMenu="closed";
       $("#collapsible-menu-content").css({'max-height': '0%'})
       
      

      },700)

      

      

      

  } else if(!checked) {

    

    

  

    $("#collapsible-menu-content").slideToggle(500);
    /*j.prop('checked', true)
    
    setTimeout(function(){
      mobileMenu="open";
        $("#collapsible-menu-content").css({'max-height': '100%'})
        
        
      },700)

      

      

  }

  d=d+1;

  



});

*/



});

