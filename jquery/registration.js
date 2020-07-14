$(document).ready(function(){
  // $("body").hover(function(){
    $(".container").fadeTo("slow", 0.15);
    $("#mymodal").show();


    $(".person1").click(function(){
    	$("#mymodal").remove();
    	$(".container").fadeTo("slow", 1);
      $("#pp").css('background-color', '#38b593');
      $("#pp").focus();
      $("#pp").css('color', 'white');
      $("#name1").show();
      $("#name2").hide();
      $(".div3").show();
      $(".div1").hide();
      $(".div2").hide();
      $(".div4").hide();
      $(".div5").hide();
    
  });

    $(".person2").click(function(){
    	$("#mymodal").remove();
    	$(".container").fadeTo("slow", 1);
      $("#bm").css('background-color', '#38b593');
      $("#bm").focus();
      $("#bm").css('color', 'white');
      $("#name1").show();
      $("#name2").hide();
      $(".div3").show();
      $(".div1").hide();
      $(".div2").hide();
      $(".div4").hide();
      $(".div5").hide();

    
  });

    $(".person3").click(function(){
    	$("#mymodal").remove();
    	$(".container").fadeTo("slow", 1);
      $("#lp").css('background-color', '#38b593');
      $("#lp").focus();
      $("#lp").css('color', 'white');
      $("#name1").hide();
      $("#name2").show();
      $(".div1").show();
      $(".div2").hide();
      $(".div3").hide();
      $(".div4").hide();
      $(".div5").hide();
    
  });

    });


  $("#pp").click(function(){
      $("#pp").css('background-color', '#38b593');
      $("#pp").css('color', 'white');
      $("#bm").css('background-color', 'white');
      $("#bm").css('color', 'black');
      $("#lp").css('background-color', 'white');
      $("#lp").css('color', 'black');
      $("#pp").focus();
      $("#name1").show();
      $("#name2").hide();
      $(".div3").show();
      $(".div1").hide();
      $(".div2").hide();
      $(".div4").hide();
      $(".div5").hide();
  });

  $("#bm").click(function(){
      $("#bm").css('background-color', '#38b593');
      $("#bm").css('color', 'white');
      $("#pp").css('background-color', 'white');
      $("#pp").css('color', 'black');
      $("#lp").css('background-color', 'white');
      $("#lp").css('color', 'black');
      $("#bm").focus();
      $("#name1").show();
      $("#name2").hide();
      $(".div3").show();
      $(".div1").hide();
      $(".div2").hide();
      $(".div4").hide();
      $(".div5").hide();

  });

  $("#lp").click(function(){
      $("#lp").css('background-color', '#38b593');
      $("#lp").css('color', 'white');
      $("#pp").css('background-color', 'white');
      $("#pp").css('color', 'black');
      $("#bm").css('background-color', 'white');
      $("#bm").css('color', 'black');
      $("#lp").focus();
      $("#name1").hide();
      $("#name2").show();
      $(".div1").show();
      $(".div2").hide();
      $(".div3").hide();
      $(".div4").hide();
      $(".div5").hide();
  });

  $("#next1").click(function(){
      $(".div1").hide();
      $(".div2").show();
      $(".div3").hide();
      $(".div4").hide();
      $(".div5").hide();
  });

  $("#next2").click(function(){
      $(".div1").hide();
      $(".div2").hide();
      $(".div3").show();
      $(".div4").hide();
      $(".div5").hide();
  });

  $("#next3").click(function(){
      $(".div1").hide();
      $(".div2").hide();
      $(".div3").hide();
      $(".div4").show();
      $(".div5").hide();
  });

  $("#next4").click(function(){
      $(".div1").hide();
      $(".div2").hide();
      $(".div3").hide();
      $(".div4").hide();
      $(".div5").show();
  });

  $("#night").click(function(){
    $("#night").hide();
    $("#day").show();
  });

  $("#day").click(function(){
    $("#night").show();
    $("#day").hide();
  });