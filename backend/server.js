const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const userRoutes = require('./routes/userRoutes');
const { json } = require('body-parser');
const app = express();

dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => { 
    res.send("API is running....")
})


app.get('/api/notes', (req,res) => {
    res.json(notes)
})


app.use('/api/users',userRoutes);


// app.get('/api/notes/:id', (req,res) => {
//     const note = notes.find((n) => n._id === req.params.id)
//     res.send(note);
// })

app.listen(PORT, console.log(`Server running on ${PORT}`));