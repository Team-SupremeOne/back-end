//Dependencies
const express = require('express');
const app = express();
const cors = require('cors');



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Redirect
app.get('/', (req, res) => {
    res.send('Hello WRLD!')
})


//Controllers



app.listen(6060, () => {
    console.log('HELLO WRLD!')
})