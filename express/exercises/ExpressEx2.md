# Express Exercise 2

> Complete ALL the exercises in this section.

<!-- ## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/express
$ git pull --no-edit https://github.com/noucampdotorgSSAD2019/express.git latest
$ git status

```

Check your ``htdocs/express`` folder.  You should have a new folder called ``6nations`` with some files in it. -->

## 6nations Web Application

1. Change to the ``6nations`` folder and install the modules ``express``, ``underscore`` and ``cors``:

```
$ cd /<DRIVE>/xampp/htdocs/Express/6nations  

$ npm init
$ npm install express --save
$ npm install underscore --save
$ npm install cors --save

```

1. Run the ``6nations`` web application:

```
$ node index.js

```

1. Using your web browser open [http://localhost:3000/teams](http://localhost:3000/teams).  Examine and understand the source code in ``index.js`` that implements this route.

1. Using your web browser open [http://localhost:3000/results](http://localhost:3000/results).  Examine and understand the source code in ``index.js`` that implements this route.

1. Using your web browser open [http://localhost:3000/results/2017](http://localhost:3000/results/2017).  Examine and understand the source code in ``index.js`` that implements this route.

1. Using your web browser open the page [http://localhost/Express/6nations/teams.html](http://localhost/Express/6nations/teams.html).  Examine and understand the source code in ``teams.html`` and ``teams.js``.

1. Modify the the code in ``teams.html`` and ``teams.js`` to add the team names to a dropdown box.  The dropdown box ``value`` attributes should correspond the the team id.  i.e.

	```html
	<select>
	<option value="1">England</option>
	<option value="2">France</option>
	<option value="3">Ireland</option>
	<option value="4">Italy</option>
	<option value="5">Scotland</option>
	<option value="6">Wales</option>
	</select>
	```

1. Examine the ``index.js`` program that has an incomplete route to get specific team results.  Modify this route so it returns results for any given team id.  For example, get the results for England with - [http://localhost:3000/results/team/1](http://localhost:3000/results/team/1)

1. Modify the the code in ``teams.html`` and ``teams.js`` again to display the results for the team chosen from the dropdown box.  Use a ``<table>`` to show the results.

<!-- 1. Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

```
$ git status
$ git add .
$ git commit -m "Exercise 2 - DONE|PARTIAL|HELP"
$ git push origin master
$ git status

``` -->
