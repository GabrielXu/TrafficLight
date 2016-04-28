$(document).ready(function() {

    $("#red").hover( function(){
    	

    	$("#top").css("background-color","red");
    });
     $("#red").mouseout( function(){

    	$("#top").css("background-color","darkred");
    });
     $("#yellow").hover( function(){
    	

    	$("#middle").css("background-color","yellow");
    });
     $("#yellow").mouseout( function(){

    	$("#middle").css("background-color","darkkhaki");
    });
     $("#green").hover( function(){
    	

    	$("#bottom").css("background-color","lime");
    });
     $("#green").mouseout( function(){

    	$("#bottom").css("background-color","forestgreen");
    }); 
});