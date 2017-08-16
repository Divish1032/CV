$(document).ready(function(){
	$('.page1 i').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page2').offset().top
	    }, 672, 'swing');
	});
});


$( window ).scroll(function() {
	if(document.body.scrollTop==0){
		$(".bounce").css("animation-iteration-count", "infinite");
	}
	else{
		$(".bounce").css("animation-iteration-count", "0");
	}


	if(document.body.scrollTop>=552){
		
	$('.perfect').addClass('side');
	$('.perfect').removeClass('side2');


}
else{
	
	$('.perfect').addClass('side2');
	$('.perfect').removeClass('side');
}  
});

$('.starsrow').mouseover(function(){
	$(this).children().next().children().stop().animate({
	        'padding-right': "10px"
	    }, 500, 'swing');
});

$('.starsrow').mouseout(function(){

	$(this).children().next().children().stop().animate({
	        'padding-right': "0px"
	    }, 300, 'swing');
});

$( window ).scroll(function() {
	


	if(document.body.scrollTop>=1&&document.body.scrollTop<=1480){
		var styles = {
      background : "#ffd633"
      
    };
	var styles1 = {
      background : "black"
      
    };

    $(".number").css(styles1);
	$('#1').css(styles);
	}

	else if(document.body.scrollTop>=1481&&document.body.scrollTop<=4047){
		var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#2').css(styles);
	}
	else if(document.body.scrollTop>=4048&&document.body.scrollTop<=5149){
	var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#3').css(styles);		


	}
	else if(document.body.scrollTop>=5150&&document.body.scrollTop<=6275){
	var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#4').css(styles);		


	}
	else{
		var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#5').css(styles);
	}
});
$('.number').mouseover(function(){
	if($(this).css("background-color")!="rgb(255, 214, 51)"){
	$(this).css("color","#a6a6a6");
}
})


$('.number').mouseout(function(){
	
	$(this).css("color","white");
})

$(document).ready(function(){
	$('#1').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page2').offset().top
	    }, 800, 'swing');
	});
});
$(document).ready(function(){
	$('#2').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page3').offset().top
	    }, 800, 'swing');
	});
});
$(document).ready(function(){
	$('#3').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page4').offset().top
	    }, 800, 'swing');
	});
});
$(document).ready(function(){
	$('#4').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page5').offset().top
	    }, 800, 'swing');
	});
});
$(document).ready(function(){
	$('#5').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page6').offset().top
	    }, 800, 'swing');
	});
});

$(".mo").click(function(){
	$("#mobile").fadeToggle()
});

$(".em").click(function(){
	$("#email").fadeToggle()
});

$(".address1").click(function(){
	$("#home").fadeToggle()
});
var c=0;
$(".facebook2").click(function(){
	if(c%2===0){
		$(".facelike").text("7");
		$(".fa-thumbs-up").css("color","white");
	}
	else{
		$(".facelike").text("6");
		$(".fa-thumbs-up").css("color","black");
	}
	c++;
});


var count=0;
	$('.bolt').click(function(){
		if(count%2===0){
			var style={
			display:"inline"
		}
		$('.wow').css(style);
	}

	else{
			var style={
			display:"none"
		}
		$('.wow').css(style);
		
		}
		count++;
	})

	
$(window).resize(function(){
   if($(window).width()<=872){
      //execute code here.
      $('.fa-user-plus').hide();
   }
   else{
   		$('.fa-user-plus').show();
   }
})       
 if($(window).width()<=872){
      //execute code here.
      $('.fa-user-plus').hide();
   }
   else{
   		$('.fa-user-plus').show();
   } 

$(window).resize(function(){
   if($(window).width()<=999){
      //execute code here.
      $('.pg2').hide();
      $('.fa-chevron-down').hide();
      $('.main').css("width","75%","text-align","center");

   }
   else{
   		$('.fa-chevron-down').show();
   		$('.pg2').show();
   		$('.main').css("width","80%");
   }
})     

if($(window).width()<=999){
      //execute code here.
      $('.pg2').hide();
      $('.fa-chevron-down').hide();
      $('.main').css("width","75%","text-align","center");

   }
   else{
   		$('.fa-chevron-down').show();
   		$('.pg2').show();
   		$('.main').css("width","80%");
   }
if($(window).width()<=768){
      //execute code here.
     $('.address').css("text-align","left");
   }
   else{
   		 $('.address').css("text-align","center");
   }
$(window).resize(function(){
   if($(window).width()<=768){
      //execute code here.
     $('.address').css("text-align","left");
   }
   else{
   		 $('.address').css("text-align","center");
   }
})     

 if($(window).width()<=500){
      //execute code here.
     $('.page1 h1').css("font-size","60px");
     $('.page2 h1').css("font-size","40px");
   }
   else{
   		  $('.page1 h1').css("font-size","96px");
     $('.page2 h1').css("font-size","63px");
   }


 if($(window).width()<=500){
      //execute code here.
     $('.page1 h1').css("font-size","60px");
     $('.page2 h1').css("font-size","40px");
     $('.page3 h1').css("font-size","40px");
     $('.page1 p').css("font-size","25px");
          $('.page1 ').css("background-size"," 100% 500px");

   }
   else{
   		  $('.page1 h1').css("font-size","96px");
   		   
   		   $('.page3 h1').css("font-size","63px");
     $('.page2 h1').css("font-size","63px");
     $('.page1 ').css("background-size","100% 670px");
   }


$(window).resize(function(){
   if($(window).width()<=500){
      //execute code here.
     $('.page1 h1').css("font-size","60px");
     $('.page2 h1').css("font-size","40px");
     $('.page3 h1').css("font-size","40px");
     $('.page1 p').css("font-size","25px");
          $('.page1 ').css("background-size"," 100% 500px");

   }
   else{
   		  $('.page1 h1').css("font-size","96px");
   		   
   		   $('.page3 h1').css("font-size","63px");
     $('.page2 h1').css("font-size","63px");
     $('.page1 ').css("background-size","100% 670px");
   }
})     

if($(window).width()<=500){
      //execute code here.
     $('.main').css("position","relative");
     $('.main').css("left","-60px");
     
   }
   else{
   	$('.main').css("position","static");
   }
$(window).resize(function(){
   if($(window).width()<=500){
      //execute code here.
     $('.main').css("position","relative");
     $('.main').css("left","-60px");
     
   }
   else{
   	$('.main').css("position","static");
   	$('.main').css("left","0px");
   	
   }
})

 if($(window).width()<=519){
      //execute code here.
     $('.page3 i').hide();
     
     
   }
   else{
   	$('.page3 i').show();
   }


$(window).resize(function(){
   if($(window).width()<=519){
      //execute code here.
     $('.page3 i').hide();
     
     
   }
   else{
   	$('.page3 i').show();
   }
})



$(".ek img").on("click", function(){
 $(this).next().click();
  $('#yelp span').css("dispaly","none");
  $('.how a').removeClass('yahoo');
});

$(".do img").on("click", function(){
 $(this).next().click();
 $('#yelp span').css("display","none");
 $('#yelp h4').text("ToDoList");
     $('#yelp p').text("Make A List Of Your Do's N Dont's"); 
     $('.how a').removeClass('yahoo');
     
    $("#yelp a").attr("href", "MyProject/Todo/index.html" )
});

$(".teen img").on("click", function(){
 $(this).next().click();
  $('#yelp span').css("dispaly","none");
  $('.how a').removeClass('yahoo');
 $('#yelp h4').text("Patatap Model");
     $('#yelp p').text("Let's Your Fingers Have The Music"); 
     
    $("#yelp a").attr("href", "MyProject/Patatap/circles.html" )
});

$(".chaar img").on("click", function(){
 $('#google').click();
  $('#yelp span').css("display","inline");
  $('.how a').addClass('yahoo');
 $('#yelp h4').text("HTML Pages");
     $('#yelp p').text("Four HTML Reponsive Projects"); 
     
    $(".yahoo")[0].attr("href", "MyProject/HTML pages/project1/index.html" );
    $(".yahoo")[1].attr("href", "MyProject/HTML pages/project2/index.html" );
    $(".yahoo")[2].attr("href", "MyProject/HTML pages/project3/index.html" );
    $(".yahoo")[3].attr("href", "MyProject/HTML pages/project4/index.html" )
    
});



$("#yelp a").on("click", function(){
 $('.close').click().animate({},672,'swing');
})
 
 
 
 