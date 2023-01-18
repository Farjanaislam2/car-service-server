const express = require('express');
const app =express();
const cors = require('cors')
const port =process.env.port || 5000;

app.use(cors());

const categories = require('./details.json');

app.get('/',(req,res)=>{
    res.send('car port running')
})

app.get('/data-categories', (req,res)=>{
    res.send(categories)
})
app.get('/data-categories/:id', (req,res)=>{


    const detail = categories.find(element =>
        {
            return element._id === req.params.id
        })
    res.send(detail)
})


app.listen(port, ()=>{
    console.log('server running')
})