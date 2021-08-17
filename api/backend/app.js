const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Things are going fine!'
    });
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
        _id: 'egegehe',
        title: 'gddgjdj',
        description: 'My favorite Bag',
        imageUrl: 'https://images.unsplash.com/photo-1629121958394-3be95d8c057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price: 4500,
        userId: '65nbdhzh',
        },
        {
            _id: 'egegehertj',
            title: 'gdggjdgj',
            description: 'My favorite Bag2',
            imageUrl: 'https://images.unsplash.com/photo-1629121958394-3be95d8c057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
            price: 4700,
            userId: '65nbhdhdhzh',
        }
];
res.status(200).json(stuff);
});


module.exports = app;