let adminmodel=require("../models/adminmodel.js");

exports.displaynav=((req,res)=>{
    res.render("nav.ejs");
})

exports.addcategory=((req,res)=>{
    res.render("Addcate.ejs",{msg:""});
})

exports.savecategory=((req,res)=>{
    let {name}=req.body;
    console.log(name)
    let savecat=adminmodel.savecate(name);
        savecat.then((re)=>{
         res.render("Addcate.ejs",{msg:"category saved successfully..."})
        }).catch((err)=>{
            console.log(err);
        })
})

exports.viewcategory=((req,res)=>{
    let cateobj=adminmodel.displaycate();
        cateobj.then((displaycate)=>{
        res.render("viewcate.ejs",{viewcate:displaycate});
        }).catch((err)=>{
            console.log(err);
        })
})