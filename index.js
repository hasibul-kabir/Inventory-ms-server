const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//connect to database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.status(200).json("Inventory Management");
})

app.listen(PORT, () => {
    console.log(`App listening on port - ${PORT}`);
})