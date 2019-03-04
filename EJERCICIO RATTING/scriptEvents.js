

	function resetRanking(){
		console.log('reset');
	document.getElementById("icon5").style.color ="";
	document.getElementById("icon4").style.color ="";
	document.getElementById("icon3").style.color ="";
	document.getElementById("icon2").style.color ="";
	document.getElementById("icon1").style.color ="";
}

		function newColor(ranking) {
			resetRanking();
			for (var i = 1; i <= ranking; i++) {
				if(i<=ranking){
					console.log(i);
					document.getElementById("icon"+ i ).style.color ="#2C98F0";
				}
			}
}


document.addEventListener("click", function(evt) {
    var outElement = document.getElementById('clearall'),
        targetElement = evt.target;  // clicked element

        if (targetElement == outElement){
        	resetRanking();
        }

});


