const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = `mongodb+srv://nasa-api:${process.env.MONGO_DB_USER_PASSWORD}@${process.env.MONGO_DB_SERVER}/nasa?retryWrites=true&w=majority`

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};