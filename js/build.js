// reference to canvas
var can = document.getElementById("poop");

function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  // artifical delay so innerHeight is correct
  setTimeout(function() {
    can.style.height = window.innerHeight + "px";
  }, 0);
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();