$(document).ready(function(){
	$('.page1 i').on('click',function (e) {
	    e.preventDefault();

	    

	    $(' body').stop().animate({
	        'scrollTop': $('.page2').offset().top
	    }, 500, 'swing');
	});
});


$( window ).scroll(function() {
	if(document.body.scrollTop==0){
		$(".bounce").css("animation-iteration-count", "infinite");
	}
	else{
		$(".bounce").css("animation-iteration-count", "0");
	}


	if(document.body.scrollTop>=582){
		var styles = {
      position : "fixed",
      top: "80px"
    };
	$('#perfect').css(styles);


}
else{
	var styles = {
      position : "absolute",
      top: "663px"
    };
	$('#perfect').css(styles);
}  
});


$(".heading").mouseover(function(){
	$(this).next().children().css({
		paddingRight: "5px" ,
		cursor: "pointer"
	});
});

$(".heading").mouseout(function(){
	$(this).next().children().css("paddingRight","0px");
});



console.log(document.body.scrollTop);



$( window ).scroll(function() {
	


	if(document.body.scrollTop>=1&&document.body.scrollTop<=1376){
		var styles = {
      background : "#ffd633"
      
    };
	var styles1 = {
      background : "black"
      
    };

    $(".number").css(styles1);
	$('#1').css(styles);
	}

	else if(document.body.scrollTop>=1377&&document.body.scrollTop<=3855){
		var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#2').css(styles);
	}
	else if(document.body.scrollTop>=3856&&document.body.scrollTop<=5133){
	var styles = {
      background : "#ffd633"
      
    };
    var styles1 = {
      background : "black"
      
    };
    $(".number").css(styles1);
	$('#3').css(styles);		


	}
	else if(document.body.scrollTop>=5134&&document.body.scrollTop<=6220){
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




}  
);


$('.number').mouseover(function(){
	if($(this).css("background-color")!="rgb(255, 214, 51)"){
	$(this).css("color","#a6a6a6");
}
})


$('.number').mouseout(function(){
	
	$(this).css("color","white");
})


$(".number").click(function(){

	if($(this).css("background-color")!="rgb(255, 214, 51)"){
	

		$(document).ready(function(){
	

	    
			
			


			if($(this).hasClass('pg2')){
	    $(' body').stop().animate({
	        'scrollTop': $('.page2').offset().top
	    }, 500, 'swing');
	}

	if($(this).hasClass('pg3')){
	    $(' body').stop().animate({
	        'scrollTop': $('.page3').offset().top
	    }, 500, 'swing');
	}

	if($(this).hasClass('pg4')){
	    $(' body').stop().animate({
	        'scrollTop': $('.page4').offset().top
	    }, 500, 'swing');
	}

	if($(this).hasClass('pg5')){
	    $(' body').stop().animate({
	        'scrollTop': $('.page5').offset().top
	    }, 500, 'swing');
	}

	if($(this).hasClass('pg6')){
	    $(' body').stop().animate({
	        'scrollTop': $('.page6').offset().top
	    }, 500, 'swing');
	}
});
	

}
});
	var count=0;
	$('.user').hover(function(){
		if(count%2===0){
			var style={
			display:"inline-block",
			
		}
		$('.user div').css(style);
		$('.bolt').css("top","0px")
		}

		else{
			var style={
			display:"none",
			
		}
		$('.user div').css(style);
		$('.bolt').css("top","232px")
		}
		count++;
	})

	
$(".mo").click(function(){
	$("#mobile").fadeToggle()
});

$(".em").click(function(){
	$("#email").fadeToggle()
});

$(".address").click(function(){
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



$("#1").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page2").offset().top
                }, 1000);
            });
            
$("#2").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page3").offset().top
                }, 1000);
            });
            
            
$("#3").click(function (){
    $('html, body').animate({
        scrollTop: $(".page4").offset().top
    }, 1000);
});


$("#4").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page5").offset().top
                }, 1000);
            });

$("#5").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page6").offset().top
                }, 1000);
            });            