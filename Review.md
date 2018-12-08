# Review Questions

## What is Node.js?

Node.js is an environment for running JavaScript outside of a browser.

## What is Express?

Express is a type framework for Node.js. This can be used to build all type of servers.

## Mention two parts of Express that you learned about this week.

Using express, developers are able to use built in methods in this library. Basically this allow us to setup servers, (listen()) to allow us to run our server on a local port. Another build in method to run CRUD operations help to receive client requests and return data or error handling, with commonly used methods like get(), post(), and delete().

## What is Middleware?

Middleware is the extra layer of code that allow us to customize what Express is already able to do. The data travels through middleware before traveling to a request. 

## What is a Resource?

Resources are the different function calls we write inside of Express, they help us send and receive data inside of our project.

## What can the API return to help clients know if a request was successful?

A status 200 and our data like and new post or obj. 

## How can we partition our application into sub-applications?

By using routers to organize any server resources.

## What is express.json() and why do we need it?

express.json() is a Middleware of the express that is built in to the library, it takes in objects or arrays and translates that data into JSON before sending the response back to the user.
