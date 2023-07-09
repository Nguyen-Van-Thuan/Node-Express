const mongoose = require('mongoose');


async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/node_dev');
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log('Connect false!!!');
  }
}

module.exports = { connect };