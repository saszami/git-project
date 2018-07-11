		$(document).ready(function(){
  			$('.gallery').slick({
  				infinite: true,
  				centerMode: true,
  				centerPadding: "0",
  				nextArrow: '<button class="arrow arrow-right">',
  				prevArrow: '<button class="arrow arrow-left">'
  			});
		});


// слайдер

$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.25)");
            $("#side2").css("transform","translateX(-395px) scale(1)");
            $("#side3").css("transform","translateX(400px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side3").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.25)");
            $("#side1").css("transform","translateX(-395px) scale(1)");
            $("#side2").css("transform","translateX(400px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.25)");
            $("#side3").css("transform","translateX(-395px) scale(1)");
            $("#side1").css("transform","translateX(400px)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==0)
        {
            $("#side3").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.25)");
            $("#side1").css("transform","translateX(-395px) scale(1)");
            $("#side2").css("transform","translateX(400px)");
            flag=2;
        }
        else if(flag==1)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.25)");
            $("#side3").css("transform","translateX(-395px) scale(1)");
            $("#side1").css("transform","translateX(400px)");
            flag=0;
        }
        else if(flag==2)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.25)");
            $("#side2").css("transform","translateX(-395px) scale(1)");
            $("#side3").css("transform","translateX(400px)");
            flag=1;
        }
    });
});
