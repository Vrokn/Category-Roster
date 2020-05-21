const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", function(e) { console.error(e); });
//content-type application/json;charset=utf-8

const MoviesSchema = new mongoose.Schema({
  title: { type: String },
  genres: { type: Array },
  score: { type: Number },
  overview: { type: String },
  watched: { type: Boolean },
  favorite: { type: Boolean },
  queue: { type: Boolean },
  poster_path: { type: String },
  backdrop_path: { type: String }, 
});
const Movies = mongoose.model("Movies", UsersSchema);


app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './src')));

// An api endpoint that returns a short list of items
app.get('https://api.themoviedb.org/3/movie/popular?api_key=9ebb3ffadcb7802418b60d473c655910', (req,res) => {
    res.json();
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.get("/#home", async (req, res) => { //GET / - muestra la lista de usuarios registrados.
  const movie = await Movies.find();
     res.send(JSON.stringify(movie));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Listening on port 3030 ..."));
 
