for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML=this.innerHTML;
    switch (buttonInnerHTML){
      case "w":
            var audio=new Audio("sounds/tom-1.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "a":
            var audio=new Audio("sounds/tom-2.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "s":
            var audio=new Audio("sounds/tom-3.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "d":
            var audio=new Audio("sounds/tom-4.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "j":
            var audio=new Audio("sounds/snare.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "k":
            var audio=new Audio("sounds/crash.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
      case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
              buttonAnimation(buttonInnerHTML);
            audio.play();
            break;
    }
});}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){
switch (key){
  case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
  case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
  case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
  case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
  case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
  case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
  case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

}
}
function buttonAnimation(num){
  document.querySelector("."+num).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+num).classList.remove("pressed");
  },100);
}
