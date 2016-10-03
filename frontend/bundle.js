var fs = require('fs'),
    concat = require('concat-files'),
    showdown = require('showdown'),
    oriolize = require('./md-oriolize.js');
var converter = new showdown.Converter({ extensions: ["oriolize"] });
 
//MARKDOWN
var md = fs.readFileSync('../public/main.md', {encoding: 'utf-8'})
fs.writeFileSync('../public/main.html', converter.makeHtml(md), {encoding: 'utf-8'})
console.log('-> generated main.html from main.md');

// JS
concat([
  '../node_modules/Lander/dist/lander.dev.js',
  '../node_modules/thebe/static/main-built.js',
], '../public/assets/oriole.js', function() {
  console.log('-> generated oriole.js');
});

// CSS
concat([
  '../node_modules/Lander/dist/lander.dev.css',
  '../node_modules/Lander/dist/oreilly.dev.css',
], '../public/assets/oriole.oreilly.css', function() {
  console.log('-> generated oriole.oreilly.css');
});

// ICON
concat([
    "../node_modules/Lander/dist/assets/icons.svg"
  ], "../public/assets/icons.svg", function() {
  console.log('-> copied icons.svg');
})