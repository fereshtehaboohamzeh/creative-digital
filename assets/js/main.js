$(document).ready(function(){
    $("#mbtn").click(function(){
        $(".show").slideDown(".show").css("transition","all, 0.1s");

        $("#crossb").click(function(){
            $(".show").slideUp("show").css("transition","all, 0.1s");
        });
    });


    var w='';
    w=$("#footer").outerWidth(true);

    if(w<993){
        $("#cop").removeClass("col-fr-6").addClass("col-fr-8");
        $("#social").removeClass("col-fr-6").addClass("col-fr-4");
        $(".projecttext").removeClass("col-fr-5");
    }

    var p='';
    p=$("#service, #learn ,  .project , .clients, .customer , .footer , .last-footer").outerWidth(true);

    if(p<769){
	    $(".menu").addClass("hidden-m");
        $(".floaty").removeClass("col-fr-4").addClass("col-fr-12");
		$(".wicon").removeClass("col-fr-3").addClass("hidden-m");
        $(".lpic").removeClass("col-fr-9").addClass("col-fr-12");
        $(".myicon").removeClass("col-fr-8").addClass("col-fr-12");
        $(".prtext").removeClass("col-fr-5").addClass("col-fr-12");
		$(".imgg").addClass("hidden-m");
		$(".comments").removeClass("col-fr-9").addClass("col-fr-12");
		$(".cimg").addClass("col-fr-6");
		$(".cfooter").removeClass("col-fr-4").addClass("col-fr-12");
		$(".cop").removeClass("col-fr-8").addClass("col-fr-12");
		$("#social").removeClass("col-fr-4").addClass("col-fr-12");
		$(".comments:nth-child(2n-1)").addClass("borderCom");
		
    }

});