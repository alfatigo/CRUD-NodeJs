const express = require("express");
const { mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require('./routes/user.js');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use('/api', userRoutes);

//Routes
mongoose.set('strictQuery', true);
app.get("/", (req, res) => {
  res.send("Home");
});

//MongoDB Connection
mongoose
  .connect('mongodb+srv://alexreyes64r:hgsJ8rchmlOHZvUG@nodecrud.g5vmhmo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("Connected!"))
  .catch((e)=> console.log('Error!\n',e));

//Server
app.listen(port, () => {
  console.log(`localhost:${port} Running....`);
});
