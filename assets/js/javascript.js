//alert("CONNECTED");

//Check off specific todos by clicking on them

$(document).ready(function(){
    $("li").click(function(){
       // alert("connected");
       
       //$(this).css("color", "gray");
       //$(this).css("text-decoration", "line-through");

        //if li is gray, turn it black
        //else turn it gray

        if($(this).css("color") === "rgb(128, 128, 128)"){
           // console.log("its gray!")}


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
     
    });
});