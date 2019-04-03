$(function (){
	$('#refreshjoke').on('click', function(){

	var $jokegoeshere = $('#jokegoeshere');

	$.ajax({
		type:'GET',
		url: 'http://api.icndb.com/jokes/random',
		dataType:'json',
		success: function (jokes) {
				$jokegoeshere.html(jokes.value['joke']);			
		}


	});

	});

});

