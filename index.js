document.querySelector(".e").addEventListener("click" , function(){
  var audio = new Audio('sounds/Estring.mp3');
  audio.play();
})

document.querySelector(".a").addEventListener("click" , function(){
  var audio = new Audio('sounds/a.mp3');
  audio.play();
})

document.querySelector(".d").addEventListener("click" , function(){
  var audio = new Audio('sounds/d.mp3');
  audio.play();
})

document.querySelector(".g").addEventListener("click" , function(){
  var audio = new Audio('sounds/g.mp3');
  audio.play();
})

document.querySelector(".b").addEventListener("click" , function(){
  var audio = new Audio('sounds/b.mp3');
  audio.play();
})

document.querySelector(".ee").addEventListener("click" , function(){
  var audio = new Audio('sounds/ee.mp3');
  audio.play();
})







document.addEventListener("keydown",clicka);
 function clicka(key){
   if(key.keyCode == "65"){
     var audio = new Audio('sounds/Estring.mp3');
     audio.play();
   }
 }

 document.addEventListener("keydown",clicks);
  function clicks(key){
    if(key.keyCode == "83"){
      var audio = new Audio('sounds/a.mp3');
      audio.play();
    }
  }


  document.addEventListener("keydown",clickd);
   function clickd(key){
     if(key.keyCode == "68"){
       var audio = new Audio('sounds/d.mp3');
       audio.play();
     }
   }


   document.addEventListener("keydown",clickj);
    function clickj(key){
      if(key.keyCode == "74"){
        var audio = new Audio('sounds/g.mp3');
        audio.play();
      }
    }


    document.addEventListener("keydown",clickk);
     function clickk(key){
       if(key.keyCode == "75"){
         var audio = new Audio('sounds/b.mp3');
         audio.play();
       }
     }



     document.addEventListener("keydown",clickl);
      function clickl(key){
        if(key.keyCode == "76"){
          var audio = new Audio('sounds/ee.mp3');
          audio.play();
        }
      }
