// Requiring module
const express = require('express');
const path = require("path");
const app = express();

const { dataRouter } = require('./routes/dataRouter');

// Defining port number
const PORT = 3000;


app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true})) // if json come backend then it convert to obj in req.body


app.use('/api/data', express.static("./data/images"));
app.use('/api/data', dataRouter);

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get("/", express.static(path.join(__dirname, "./public")));
// or using middilware app.use(express.static('public'));


// Server setup
app.listen(PORT, () => {
    console.log(`Running server on PORT ${PORT}...`);
})