# Node.js Exercise 4 – npm Packages
		
> Complete ALL the exercises in this section.

<!-- ## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/nodejs
$ git pull --no-edit https://github.com/noucampdotorgSSAD2019/nodejs.git latest
$ git status

``` -->

### Part 1 - myUC

1.	In ``htdocs/nodejs`` create a new project folder called ``myUC``

1.	Create a ``package.json`` file for the new project using ``npm init`` command

1.	Add the *npm* package ``upper-case`` to the project

1.	View the ``packages.json`` file to ensure there are dependencies for the package just installed

1.  Create a ``index.js`` file in the ``myUC`` folder with this code:

    ```javascript
    // index.js
    var uc = require('upper-case');

    console.log(uc.upperCase("hello, world"));
    ```

1.  Run the project like this with the *node* command:

    ```
    $ node index.js
    HELLO, WORLD
    $
    ```

1.  Run the project like this with the *npm start* command:

    ```
    $ npm start
    HELLO, WORLD
    $
    ```

### Part 2 - Dice

Create an **new project** folder called `dice`.  In the project use the npm package [dice-random](https://www.npmjs.com/package/dice-random) to print random values from 1 to 6.  e.g.

```
$ node index.js
1
$ node index.js
3
$ node index.js
6
```