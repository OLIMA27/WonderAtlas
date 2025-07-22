var placecontainer= document.getElementById("placeimg");
var search=document.getElementById("search");
var placelist=placecontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue= event.target.value.toUpperCase();
    for( count = 0;count<placelist.length; count++){
        var placename = placelist[count].querySelector("p").textContent;
        
        if(placename.toUpperCase().indexOf(enteredvalue)<0){
            placelist[count].style.display="none"
        }
        else{
            placelist[count].style.display="block"
        }
    }

})