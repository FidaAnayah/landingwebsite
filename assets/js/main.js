
// nav bar toggle
$(".fa-bars").click(function(){
    $("nav ul").toggleClass('active',2000);
    
})
//color box
let colors =["pink","#053805","palevioletred","#120444","orange"]
for(let i =0; i< colors.length; i++){
    $(".color-box .color-options ul li").eq(i).css("backgroundColor",colors[i]);
}

$(".color-box .color-options ul li").click(function(){
    let currentBg = $(this).css("backgroundColor");

    $(".change").css("color",currentBg)
    $(".change-bg").css("backgroundColor",currentBg)
});

$(".color-box i").click(function(){
    let box = $(".color-options").outerWidth();
    
    if( $(".color-box").css("left") =="0px"){
        $(".color-box").animate({"left":-box},2000)
    }else{
        $(".color-box").animate({"left":0},2000)
    }
   
})
// loading spinner
$(document).ready(function(){
    $(".loading .spinner").fadeOut(3000);
    $(".loading").fadeOut(3000);
    $("html,body").css("overflow","auto");
})
// changing nav bar while scrolling
let aboutSection = $(".about").offset().top;
// console.log(aboutSection);
$(window).scroll(function(){
    // console.log("hhh")
    let tScroll = $(window).scrollTop();
    // console.log(tScroll);
    if(tScroll >= aboutSection - 50){
        $("nav").css({"backgroundColor":"rgba(16,16,16,0.5)" ,"position":"fixed","transition":"all 5s"});
        $("#btnUp").fadeIn(2000);
    }
    else{
        $("nav").css({"backgroundColor":"transparent", "position":"sticky"}); 
        $("#btnUp").fadeOut(2000);
    }
})

$("#btnUp").click(function(){
    // console.log("hhhh")
    $(window).scrollTop(0);
})

// smooth scroll if bootstrap scroll is deleted
// $(".smooth").click(function(e){
// let att = $(e.target).attr('href');
// // console.log(att);
// let sectionOffset = $(attr).offset().top;
// console.log(sectionOffset)
// // $("html,body").animate({scrollTop:sectionOffset},2000);
// })

// owl carousel plugin call
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        nav:true, 
        stagePadding:10,
        margin: 20,
        loop:true,
        dotsEach:true,
        autoplay:true,
        autoplayTimeout:2000
    });
  }); 

  