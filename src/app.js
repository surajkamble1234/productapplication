let express=require("express");
let bodyparser=require("body-parser");
let db=require("../db.js");
let router=require("./routes/adminroute.js");

let app=express();

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.set("view engine","views")

module.exports=app;