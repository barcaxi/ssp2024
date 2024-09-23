# Node.js Exercise 3 – JSON Server

> Complete ALL the exercises in this section.

1.	Within the ``htdocs/nodejs`` folder create a subfolder called ``clubapi``.

1.	In ``clubapi`` create a subfolder called ``data`` and place the file ``clubs.json`` in it:

	```javascript
	{
	"clubs": [
	   { "name":"Chelsea" , "stadium":"Stamford Bridge" },
	   { "name":"Liverpool" , "stadium":"Anfield" },
	   { "name":"Manchester Utd" , "stadium":"Old Trafford" },
	   { "name":"Arsenal" , "stadium":"Emirates Stadium" }
	]
	}

	```

1.	In ``clubapi`` create and run the module ``api.js``:

	```javascript
	var http = require("http");
	var data = require("./data/clubs");

	var myServer = http.createServer(function(request, response) {
	   response.writeHead(200, {"Content-Type": "text/json"});
	   response.write(JSON.stringify(data));
	   response.end();
	});

	myServer.listen(3000);
	console.log("Server listening on port 3000");

	```

	Test it using the URL ``http://localhost:3000``
