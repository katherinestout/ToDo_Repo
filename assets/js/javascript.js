//alert("CONNECTED");

//Check off specific todos by clicking on them

$(document).ready(function(){
    $("li").click(function(){
        $(this).toggleClass("completed");
    });
       // alert("connected");
       
       //$(this).css("color", "gray");
       //$(this).css("text-decoration", "line-through");

        //if li is gray, turn it black
        //else turn it gray

               /*  if($(this).css("color") === "rgb(128, 128, 128)"){
         
            $(this).css({
                color:"black",
                textDecoration: "none"
            });
        }
        
    else {
        $(this).css({
            color:"gray",
            textDecoration: "line-through"
        });
    }
    });*/

    //Click on X to delete todo - - - - -
    /*
$("span").click(function(){
    alert("clicked on a span");

});
*/


//click on x to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        //gets li
        //remove li
        $(this).remove();
        //these two this dont refer to the same 
    });
    event.stopPropogation();
});



});