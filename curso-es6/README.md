1 - Create the project folder (i.e: mkdir curso-es6)
2 - Inside the project folder, start the project: yarn init -y
3 - Install the dependencies by line commands:
  a - yarn add @babel/cli
  b - yarn add @babel/preset-env
  c - yarn add @babel/core
4 - On package.json file, setup a script called dev with the following sintaxe:
  a - "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
  Note that the attribute -w was added to babel recreate automatically the bundle.js, once main.js changed
5 - Create a HTML(i.e: index.html) and add a tag SCRIPT with SRC for bundle.js
  i.e: script src="./bundle.js"></script>