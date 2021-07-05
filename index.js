const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

app.post('/documents', async(req, res) => {
    try{
        const { body } = req.body;
        res.json("OK");
    } catch(err) {
        console.error(err.message);
    }
})

app.get('/documents/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const { body } = req.body;
        res.json('querying id : ' + id);
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log('server has started on port 5000');
})