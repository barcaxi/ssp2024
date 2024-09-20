$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/?page=artist", function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#myDiv").append(value.artist_name+"<br>");
		});		
	});	

});
