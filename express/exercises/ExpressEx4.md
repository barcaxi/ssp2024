# Express Exercise 4

# Part 1 — nodemon Setup

Nodemon is a utility that will monitor for any changes in your source code and automatically restart your server. 

Just use ``nodemon`` instead of ``node`` to run your code, and now your process will automatically restart when your code changes. 

1.	Install ``nodemon`` from your Command Prompt with:

	```
	npm install -g nodemon

	```

1.	At ATU you'll need to add the `nodemon` home folder to `PATH`:

	```
	set PATH=%PATH%;c:\users\YOUR_USERNAME\AppData\Roaming\npm;
	```

1.	Run a web app to test it works.  For example:

	```
	nodemon index.js

	```

	Try changing your source code in ``index.js`` and your server should automatically restart.


# Part 2 — PostMan Setup

1.	Install the ``postman`` Chrome extension or app

1.	Run it and test it works with a ``GET`` request


# Part 3 – POST Request with PostMan

1.  Run the ``who`` web application again.

1.	Examine the code in [http://localhost/express/who/whoAdd.html](http://localhost/express/who/whoAdd.html).  Specifically, look at the ``.post()`` function details.

1.	Now use *PostMan* to send a ``POST`` request to the route ``/who/add``  with this JSON data:

	```
	{
        name: "thomas devine",
        email:"thomas.devine@atu.ie"
    }
	```

1.	Then use *PostMan* to send a ``GET`` request to the route ``/who``.  You should see the new JSON object sent in the POST request above.


# Part 4 – Express File Server

1.	In Part 3 two *static* files where used:

	-	``whoAdd.html``
	-	``whoAdd.js``

	These files were handled/served by the XAMPP server.  It's not necessary to use XAMPP to serve these files when Express can do this for you in your web app.

	Move these files to a new ``public`` subfolder within the ``who`` web app and serve them using the web app, not XAMPP.  

	Test it works by using the URLs [http://localhost:3000/whoAdd.html](http://localhost:3000/whoAdd.html)

