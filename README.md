# Peter LaMontagne's Personal Website

This website was created to allow me to practice setting up a webserver from scratch, and serve as a home for all my current & future projects.

## Using

### Requirements
* Node.js installed on server
* nginx server setup on host, setup as reverse proxy to this node server on port 3000

### Starting

Once cloned, run `npm install` to install dependencies. After that, run normally with `npm start` or run `npm run dev` to run in nodemon. This will start the server on port 3000. Note that it is only an http server. It is recomended to use nginx or apache to setup a reverse proxy.


## Project Details

* Uses Node.js as server backend
* Express is used as the framework
* Handlebars is used as the templating engine
* Uses nginx reverse proxy to handle ssl/https


## Current Real-World Use

This website serves as my personal website, accessible at peterlamontagne.com. It is running on a Raspberry Pi 3b, on Raspbian. 

