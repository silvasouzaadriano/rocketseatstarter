### Create the project folder (i.e: mkdir curso-es6)

### Inside the project folder, start the project: yarn init -y

### Install the dependencies by line commands:
 
   - yarn add @babel/cli
   - yarn add @babel/preset-env
   - yarn add @babel/core
   - yarn add @babel/plugin-proposal-object-rest-spread

### Create a file called .gitignore and add the node_modules folder name on it
 
   - i.e: node_modules/

### Create a file .babelrc and add the following instructions:
 
    {
      "presets": ["@babel/preset-env"], // Working with browser
      "plugins": ["@babel/plugin-proposal-object-rest-spread"]
    } 

### On package.json file, setup a script called dev with the following sintaxe:

    "scripts": {
      "dev": "babel ./main.js -o ./bundle.js -w"
    }
    Note that the attribute -w was added to babel recreate automatically the bundle.js, once main.js changed

### Create a HTML(i.e: index.html) and add a tag SCRIPT with SRC for bundle.js
    i.e: <script src="./bundle.js"></script>