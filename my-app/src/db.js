const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/movies', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", function(e) { console.error(e); });
//content-type application/json;charset=utf-8

const MoviesSchema = new mongoose.Schema({
  title: { type: String },
  email: { type: String },
  password: { type: String }
});
const Users = mongoose.model("Users", UsersSchema);

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/register", async (req, res) => { //POST /register - crea al usuario en MongoDB.
  const name = req.body.name;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 10);
  console.log(req.body);
  const entrie = new Users({ name:name, email:email, password:password });
  await entrie.save();
  res.send(200);
});

app.get("/", async (req, res) => { //GET / - muestra la lista de usuarios registrados.
  const user = await Users.find();
     res.send(JSON.stringify(user));
});
 
app.listen(3030, () => console.log("Listening on port 3030 ..."));