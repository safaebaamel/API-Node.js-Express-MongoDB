# API-Node.js-Express-MongoDB
Go-Full-Stack-With-Node.js-Express-MongoDB OpenClassRooms

# What is Node?
Before we jump in and start writing code, what is Node? What is Express? Is there a difference?

Node is the runtime that allows us to write all of our server-side tasks — like business logic, data persistence, and security — in JavaScript.  It also adds functionalities that normal browser JavaScript doesn't have, like giving you access to the local filesystem, for example.  

Express, simply put, is a framework that sits on top of Node, and makes Node servers much easier to build and maintain.

Writing web servers in pure Node, while possible, is time-consuming and painstaking, as we have to manually parse every incoming request, for example. Using the Express framework makes these tasks much simpler, allowing us to build out our APIs in half the time, so let's install it now.

An Express app is basically a series of functions called middleware. Each piece of middleware receives the request and response objects, and can read, parse, and manipulate them as necessary. Express middleware also receives the next method, which allows that middleware to pass execution on to the next piece of middleware.  

-------------
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

module.exports = app;
-----------------

This Express app contains four pieces of middleware:

the first logs "Request received" to the console, and hands on execution

the second adds a 201 status code to the response, and hands on execution

the third sends the JSON response, and hands on execution

the final piece of middleware logs "Response sent successfully" to the console

This is a very simple server that doesn't do much for now, but it illustrates how middleware works in an Express app.

# CORS errors
CORS stands for Cross Origin Resource Sharing. It is a standard that allows us to relax default security rules which prevent HTTP calls from being made between different servers. In our case, we have two origins: localhost:3000 and localhost:4200, and we would like them to be able to communicate with each other.  For this, we need to add some headers to our response object.
