widow.onload = function(){
    let images = document.querySelectorAll("img");
    
    for(let image of images){
          image.addEventListener("click", function1);
    }
}

    function function1(event) {
        let target = event.currentTarget;
        event.stopPropagation();
        if(target.classList.contains("expanded")){
            target.classList.remove("expanded");
        }else{
            target.classList.contains("expanded");
      }
    
        
    }
