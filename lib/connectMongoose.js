'use strict';

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.log('error de conexión', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect('mongodb://localhost/nodepop',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;