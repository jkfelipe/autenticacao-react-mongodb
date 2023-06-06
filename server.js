const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const url = 'mongodb://10.8.0.1:27017/test';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
app.use('/auth', authRoutes);