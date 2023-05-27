//load env variables
if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}


// import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb")
const Note = require("./models/note")

//create an express app
const app = express();

//configure express app
app.use(express.json())

//connect to datatbase
connectToDb();

//routing
app.get("/", (req, res) => {
    // res.json({ hello: "world" });
    const data = res.JSON
    console.log(data)
})

app.get("/notes", async (req, res) => {
    //find the notes
    const notes = await Note.find()
    //respond with them
    const data = res.json({ notes: notes })
    console.log(JSON.stringify(data))
})

app.get("/notes/:id", async (req, res) => {
    //get id off the url
   const noteId = req.params.id
    //find the note using that id
    const note = await Note.findById(noteId)
    //respond with the note
    res.json({note: note})
})

app.post("/notes", async (req, res) => {
    //get the sent in data off request body
    const noteTitle = req.body.title;
    const noteBody = req.body.body

    //create a note with it
    const note = await Note.create({
        title: noteTitle,
        body: noteBody,
    })

    //respond with the new note
    res.json({ note: note })
});

//start our server
// app.listen(process.env.PORT);
app.listen(process.env.PORT, function () {
    console.log('Example app listening on port 4000!');
   });