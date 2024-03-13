$(document).ready(function () {
        if ($(window).width() > 991){
        $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }
});

$(".audio-div audio").on('play',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})
$(".audio-div audio").on('pause',function(){
  var parent = $(this).parent();
  $(parent).toggleClass('active');
})


jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: false,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:4
      }
    }
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


// vertical carousel 

$(".next-img").click(function(){
    var img;
    var count = 0;
    var scrollTop = $(".vertical-carousel").scrollTop() + 85;
    $(".vertical-carousel").scrollTop(scrollTop);	  
})

$(".pre-img").click(function(){
  var img;
  var count = 0;
  var scrollTop = $(".vertical-carousel").scrollTop() - 85;
  $(".vertical-carousel").scrollTop(scrollTop);
})

$(".remove-btn").click(function(){
  var parent = $(this).parent().parent().parent().parent().parent();
  $(parent).remove();
});

$(".vector-icon").click(function(){
  $(this).toggleClass('active');
});

if ($(window).width() < 767) {
  $(".card-paragraph.author-detail").each(function(){
    var text = $(this).text();
    if (text.length > 115) {
      var finded = text.substring(0,115) + "...";
      $(this).text(finded);
    }
  })
}

// navbar hide and show

// $('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fas fa-chevron-up fas fa-chevron-down");
});

// zoom img 

imageZoom("myimage", "myresult");
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
   console.log("result.offsetWidth  >>>>>", result.offsetWidth ,"lens.offsetWidth>>>>>>>>>>>",lens.offsetWidth);
  cx = 300 / lens.offsetWidth;
  console.log("result.offsetHeight>>>>>",result.offsetHeight ,"llens.offsetHeighth>>>>>>>>>>>",lens.offsetHeight);
  cy = 300 / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.srcset + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
 // img.addEventListener("mouseenter", bigImg);  
 
  
  
  function bigImg(x) {
    console.log("onmouseenter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}

function normalImg(x) {
//result.style.display ="none";
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>onmousLEAVE");
}


  
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
  // console.log("x" , x , "and Y " , y); 
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;  } //else{img.addEventListener("mouseenter", bigImg);  }
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight; img.addEventListener("mouseleave",  normalImg);}//else{img.addEventListener("mouseenter", bigImg);  }
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    //console.log("------------------A  left" ,  a ); 
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
  
}

function hideme(x) {
    //x.style.display = "none";
   
}
function showme(x) {
    //x.style.display = "block";
   
}


