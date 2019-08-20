### Create the project folder (i.e: mkdir curso-es6)

### Inside the project folder, start the project: yarn init -y

### Install the dependencies by line commands:

- yarn add @babel/cli -D
- yarn add @babel/preset-env -D
- yarn add @babel/core -D
- yarn add @babel/plugin-proposal-object-rest-spread -D
- yarn add babel-loader -D
- The next dependencies should be installed pnly if the developer would like to work with webpack functionality
  - yarn add webpack webpack-cli -D
  - yarn add webpack-dev-server -D (offline working using a local server: i.e: http://localhost:8080/)
- The next dependencies are necessary for async/await functionality (added on ES8)
  - yarn add @babel/plugin-transform-async-to-generator -D
  - yarn add @babel/polyfill -D

### Create a file called .gitignore and add the node_modules folder name on it

- i.e: node_modules/

### Create a file .babelrc and add the following instructions:

    {
      "presets": ["@babel/preset-env"], // Working with browser
      "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
      ]
    }

### On package.json file, setup a script called dev with the following sintaxe:

    //Using babel that create the bundle.js
    "scripts": {
      "dev": "babel ./main.js -o ./bundle.js -w"
    }

    //Using webpack as server and also for production deploy (on this case the bundle.js file is created)
    //Note that this option only should be added if the webpack is configured

    "scripts": {
      "dev": "webpack-dev-server --mode=development",
      "build": "webpack --mode=development"
    }

    Note that the attribute -w was added to babel recreate automatically the bundle.js, once main.js changed. After change the package.json file, in a
    separetely terminal, the command yarn dev must be ran in order to start the process. For webpack the reload is automatically.

    Also, always when a new dependency is installed and it is configured on package.json file, the terminal must be stopped (Control + C) and restarted running the yarn dev command again.

### Create a HTML(i.e: index.html) and add a tag SCRIPT with SRC for bundle.js

    i.e: <script src="./bundle.js"></script>

### For when using webpack functionality

    Create a folder called src and move the main.js to this folder
    Create a folder called publich and move the index.html to this folder
    On root folder create a file called webpack.config.js with the following setup:
    
        module.exports = {
          entry: ['@babel/polyfill', './src/main.js'],
          output: {
            path: __dirname + '/public',
            filename: 'bundle.js'
          },
          devServer: {
            contentBase: __dirname + '/public'
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
              }
            ]
          }
        }
