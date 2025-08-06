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
        res.render("viewcate.ejs",{viewcate:displaycate,msg:""});
        }).catch((err)=>{
            console.log(err);
        })
})

exports.deletecategoryy=((req,res)=>{
    let cid=req.query.id;
    let delcategory=adminmodel.deletecategory(cid);
        delcategory.then((delcate)=>{
        let cateobj=adminmodel.displaycate();
        cateobj.then((displaycate)=>{
        res.render("viewcate.ejs",{viewcate:displaycate,msg:"category deleted..."});
       
        }).catch((err)=>{
            console.log(err);
        })
        }).catch((err)=>{
            console.log(err);
        })
})

exports.updatecategory=((req,res)=>{
    let cid=req.query.id;
    let updatecate=adminmodel.updatecategory(cid);
        updatecate.then((upcate)=>{
         res.render("updatecategory.ejs",{upcategory:upcate})
        }).catch((err)=>{
            console.log(err);
        })
})

exports.saveupdatecate=((req,res)=>{
    let {cid,name}=req.body;
    let updatecateob=adminmodel.saveupdatecategory(name,cid);
        updatecateob.then((updateca)=>{
         let cid=req.query.id;
    let delcategory=adminmodel.deletecategory(cid);
        delcategory.then((delcate)=>{
        let cateobj=adminmodel.displaycate();
        cateobj.then((displaycate)=>{
        res.render("viewcate.ejs",{viewcate:displaycate,msg:"category Updated..."});
       
        }).catch((err)=>{
            console.log(err);
        })
        }).catch((err)=>{
            console.log(err);
        })
        }).catch((err)=>{
            console.log(err);
        })

})

exports.searchcategory=((req,res)=>{
    let n=req.query.name;
    let searchcate=adminmodel.searchcategory(n);
        searchcate.then((resultcategory)=>{
        res.send(resultcategory);
        }).catch((err)=>{
            console.log(err);
        })
})