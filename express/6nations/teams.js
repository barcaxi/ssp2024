$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/teams/", function(data){
		$.each(data.teams, function(i, value){
			$("#myDiv").append(value.name+"<br>");
		});		
	});	
	
});
