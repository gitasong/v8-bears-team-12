# Meet and Eat App

## Overview

be Hybrid between Yelp and Tinder app where you can meet people to eat with. 
Connect with ppl who have similar tastes in food, interests. Eating is an everyday part 
of our life, and eating together is an activity that connects people.  Eat delicious food 
and meet people while doing it.

## Run Scripts

- `npm run dev`: Will run `node server/main.js` with `NODE_ENV` set to `development`
- `npm run build`: Builds the Webpack bundles into `client/build` folder
- `npm start`: Does a `npm run build` and run `node server/main.js` with NODE_ENV set to `production`

## Woefully Incomplete Setup Notes

This is the inital setup done while in the project folder.

```
# create a package.json
npm init -y

# create gitignore to ignore swp files and node_modules folder
touch .gitignore
echo '*.swp' >> .gitignore
echo '/node_modules' >> .gitignore
echo '/client/build' >> .gitignore

# Installs json package globally to conveniently be able to use it from command-line
npm i -g json

# Specify node 10 engine in package.json
json -I -f package.json -e 'this.engines={node: "10.x"}'

# Specify run scripts
json -I -f package.json -e 'this.scripts.build="NODE_ENV=production webpack"'
json -I -f package.json -e 'this.scripts.dev="NODE_ENV=development node server/main.js"'
json -I -f package.json -e 'this.scripts.start="npm run build && NODE_ENV=production node server/main.js"'

# Install npm packages: babel, webpack, webpack plugins and express
npm i -D @babel/core @babel/polyfill @babel/preset-env @babel/preset-react babel-loader
npm i -D clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin
npm i --save express dotenv
npm i --save webpack webpack-cli webpack-dev-middleware webpack-hot-middleware
npm i --save style-loader css-loader
npm i --save react react-dom react-hot-loader

# Create client and server folders
mkdir -p client/{src,build} server
```