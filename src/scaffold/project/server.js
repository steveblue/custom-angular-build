"use strict";
// server.js

const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();
const config = require('./ngs.config.js');
const serverConfig = {
  dev: require('./config/server.config.dev.js')
};
let env = process.env.NODE_ENV || 'dev';
const port = serverConfig[env].port || process.env.PORT;
const host = serverConfig[env].origin;
let ssl = false;
let canWatch = false;
let server;

process.argv.forEach(function(arg){

  if (arg.includes('--watch')) {
    canWatch = true;
  }

});

// Livereload Server Start

let live = function() {
   let livereload = require('livereload');
   let liveserver = livereload.createServer({
     port: 35729
   });
   liveserver.watch([__dirname + '/'+config.build+'/assets',
                     __dirname + '/'+config.build+'/src',
                     __dirname + '/'+config.build+'/style']);
   console.log('Livereload available at '+host+':'+35729);
};

// Create Server


server = http.createServer(app);

if (canWatch === true) {

  live();

}

// Express Middleware


// Load Modules

const routes = require('./router')(app);

// Server Start

server.listen(port);

console.log('Express available at '+host+':'+port);


module.exports = app;
