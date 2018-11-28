const express = require('express')
const app= express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
    });

// GET method route
app.get('/contact', (req, res) => {
    res.send('contact')
  });

// POST method route
app.get('/home', (req, res) => {
    res.send('homepage')
  });

//This route path will match requests to /about.
app.get('/about', (req, res) => {
    res.send('about')
  });

app.listen(3000)
