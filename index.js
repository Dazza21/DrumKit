var n = document.querySelectorAll("button").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    play_Drum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  play_Drum(event.key);
  buttonAnimation(event.key);
});

function play_Drum(event) {
  var audio;
  var playKey = event;
  switch (playKey) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(playKey);
  }
}

function buttonAnimation(button) {
  var currentClass = "." + button;
  var currentButton = document.querySelector(currentClass);
  currentButton.classList.add("pressed");

  setTimeout(function()
  {
    currentButton.classList.remove("pressed");
  }, 100);
}
