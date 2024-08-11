const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://fs7468726:Abc_123@cluster0.6l0wj1k.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
 
  