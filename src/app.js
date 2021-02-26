const express = require("express");
const app = express();
const path = require("path");
const hbs =  require("hbs");
const { json } = require("express");
require("./db/conn");
const Register = require("./models/registers");
const port =process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",async(req,res)=>{
   try {
       const registerEmployee = new Register({
           name_s:req.body.name_s,
           phoneNo_s:req.body.phoneNo_s,
           Email_s:req.body.Email_s,
           username_s:req.body. username_s,
           address_s:req.body.address_s,
           state_s:req.body.state_s,
           district_s:req.body.district_s
       })
       const registered = await registerEmployee.save();
       res.status(201).render("index");
   } catch (error) {
       res.status(400).send(error);
   }
});
app.listen(port ,()=>{
    console.log(`Server is Running at port no ${port}`);
});
