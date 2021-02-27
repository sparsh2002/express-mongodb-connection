const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.kat9b.mongodb.net/youtubeRegistration?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log(`no connection`);
}) 
