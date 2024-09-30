# Node.js Exercise 5 – MySQL Query
		
> Complete ALL the exercises in this section.

<!-- 
## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/nodejs
$ git pull --no-edit https://github.com/noucampdotorgSSAD2019/nodejs.git latest
$ git status

``` -->
## Part 1 – MySQL Music Database Query

1.  Open the Command Prompt window.

1.	In ``htdocs/nodejs/mysqlmusic`` create a new project ``package.json`` file using ``npm init`` command.

1.	Add the *npm* package ``mysql`` to the project

1.	View the ``packages.json`` file to ensure there are dependencies for the package just installed

1.  Examine and understand the ``index.js`` file with code that connects to the MySQL server and runs the query.

1.  Ensure you are running a MySQL server.  Run XAMPP to do this.  Make sure it has the ``music`` database.

1.  Run the ``index.js`` file to test everything works.


## Part 2 – MySQL Music Database Query

1.  Change the query to retrieve all the rows from the ``album`` table and run ``index.js`` again.

1.  Change the query to retrieve only *New Order* albums and run again.

<!-- 1.  Push your code to your private repository on GitHub. Type these commands into your Git Bash client:

    ```
    $ cd /<DRIVE>/xampp/htdocs/nodejs
    $ git status
    $ git add .
    $ git commit -m "Exercise 5 - DONE|PARTIAL|HELP"
    $ git push origin master
    $ git status
    ``` -->

## Part 3 – MySQL JSON Server

In this part you'll attempt to write a MySQL JSON server that returns a MySQL query as JSON data.  
For example, the server could return data from the ``artist`` table as this JSON data:

```
[{"artist_id":1,"artist_name":"New Order"},{"artist_id":2,"artist_name":"Nick Cave & The Bad Seeds"},{"artist_id":3,"artist_name":"Miles Davis"},{"artist_id":4,"artist_name":"The Rolling Stones"},{"artist_id":5,"artist_name":"The Stone Roses"},{"artist_id":6,"artist_name":"Kylie Minogue"}]
```

1.  Open the program ``musicJSONServer.js``.  It is an incomplete code solution.  Provide the missing code to complete this solution.

1.  Run the program and test it using the URL [http://localhost:3000/](http://localhost:3000/) 

    You should see the JSON data shown above.