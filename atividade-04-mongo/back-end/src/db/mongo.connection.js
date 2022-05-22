const mongoose = require("mongoose");

const mongoDB_URI = 'mongodb://localhost:27017/ufc_web';
mongoose.connect(mongoDB_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose Connected to ' + mongoDB_URI);
});
db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URI);
});
db.on('error', (err) => {
    console.log('Mongoose Error: ' + err);
});