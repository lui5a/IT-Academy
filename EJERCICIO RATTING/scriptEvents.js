function resetRanking() {
  console.log("reset");
  document.getElementById("icon5").style.color = "";
  document.getElementById("icon4").style.color = "";
  document.getElementById("icon3").style.color = "";
  document.getElementById("icon2").style.color = "";
  document.getElementById("icon1").style.color = "";
}

function newColor(ranking) {
  resetRanking();
  for (var i = 1; i <= ranking; i++) {
    if (i <= ranking) {
      console.log(i);
      document.getElementById("icon" + i).style.color = "#2C98F0";
      createStars();
    }
  }
}

document.addEventListener("click", function(evt) {
  var outElement = document.getElementById("clearall"),
      targetElement = evt.target; // clicked element

  if (targetElement == outElement) {
    resetRanking();
    
  }
});


window.onload = function (){  
createStars();


};

  function createStars() {
    var spawnStars = document.getElementById("sky");
        numStars = 100;
    for (let i = 0; i < numStars; i++) {
    	
      var randSize = 1 + Math.random() * 3;
      var star = document.createElement("div");

      star.className = "star";
      star.style.position = "absolute";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.backgroundColor = "#fff";
      star.style.height = randSize + "px";
      star.style.width = randSize + "px";
      star.style.borderRadius = "50%";
      star.style.zIndex = 0;


      spawnStars.appendChild(star);

    };
  };