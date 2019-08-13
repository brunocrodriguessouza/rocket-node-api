const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');

// starting the App
const app = express();
app.use(express.json())
app.use(cors());

// starting the database
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
requireDir('./src/models');

// const Product = mongoose.model('Product')

// routes
app.use('/api', require(".//src/routes"));

app.listen(3001);