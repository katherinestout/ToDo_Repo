//alert("CONNECTED");

//Check off specific todos by clicking on them

$(document).ready(function(){

//when an li is clicked inside the ul, run this code
    $("ul").on("click", "li", function(){
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
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        //gets li
        //remove li
        $(this).remove();
        //these two this dont refer to the same 
    });
  
});
$("input[type= 'text'").keypress(function(event){
    if(event.which === 13){
        //which refers to the character code of the key

        //grabbing a new todo text from input
        var todoText = $(this).val();
        //clear out input
        $(this).val("");
        //create a new li and add(append) to ul
        $("ul").append("<li> <span> <i class='fas fa-trash-alt'> </i> </span>" + todoText + "</li>")
     


    }
});


});