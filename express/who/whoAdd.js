$("document").ready(function(){
 
    $("#add").click(function(){
        $.post("http://localhost:3000/who/add",
        {
            name: $("#name").val(),
            email:$("#email").val()
        });
    });
 
});