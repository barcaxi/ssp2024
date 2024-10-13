$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/teams/", function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#myDiv").append(value.name+"<br>");
		});		

	});	
	
});
