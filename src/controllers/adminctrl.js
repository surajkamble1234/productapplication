let adminmodel=require("../models/adminmodel.js");

//nav
exports.displaynav=((req,res)=>{
    res.render("home.ejs");
})

//home
exports.homepage=((req,res)=>{
    res.render("home.ejs");
})

//category
exports.addcategory=((req,res)=>{
    res.render("Addcate.ejs",{msg:""});
})

exports.savecategory=((req,res)=>{
    let {name}=req.body;
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

//product
exports.addproduct=((req,res)=>{
    let getcate=adminmodel.getcategory();
     getcate.then((getcate)=>{
      res.render("Addproduct.ejs",{getca:getcate,msg:""});
     }).catch((err)=>{
        console.log(err);
     })
   
})

exports.saveproduct=((req,res)=>{
 let {pname,cid}=req.body;
 let saveprod=adminmodel.saveproduct(pname,cid);
     saveprod.then((savepro)=>{
     let getcate=adminmodel.getcategory();
     getcate.then((getcate)=>{
      res.render("Addproduct.ejs",{getca:getcate,msg:"Product saved successfully..."});
     }).catch((err)=>{
        console.log(err);
     })
   
     }).catch((err)=>{
        console.log(err);
     })
});

exports.viewproduct=((req,res)=>{
   let viewpro=adminmodel.viewprod();
       viewpro.then((viewprod)=>{
       res.render("ViewProduct.ejs",{viewpro:viewprod});
       }).catch((err)=>{
        console.log(err);
       })
})

exports.updateprod=((req,res)=>{
    let updatecatepro=adminmodel.getupcateprod();
    let pid=req.query.pid;
    let getproduct=adminmodel.getproduct(pid);
        getproduct.then((productupdate)=>{
          updatecatepro.then((upprodcate)=>{
         res.render("updateproduct.ejs",{updatecate:upprodcate,prod:productupdate});
        }).catch((err)=>{
            console.log(err);
        })
        }).catch((err)=>{
            console.log(err);
        })
       
})

exports.finalupdateprod=((req,res)=>{
    let {pname,cid,pid}=req.body;
    let finalupproduct=adminmodel.finalupdateproduct(pname,cid,pid);
        finalupproduct.then((finalproduct)=>{
        let viewpro=adminmodel.viewprod();
            viewpro.then((viewprod)=>{
            res.render("ViewProduct.ejs",{viewpro:viewprod});
       }).catch((err)=>{
        console.log(err);
       })
        }).catch((err)=>{
            console.log(err);
        })

})

exports.deleteproduct=((req,res)=>{
     let pid=req.query.pid;
     let delprod=adminmodel.deleteproduct(pid);
         delprod.then((re)=>{
          let viewpro=adminmodel.viewprod();
          viewpro.then((viewprod)=>{
          res.render("ViewProduct.ejs",{viewpro:viewprod});
          }).catch((err)=>{
          console.log(err);
          })
         }).catch((err)=>{
            console.log(err);
         })
})

exports.searchproduct=((req,res)=>{
    let name=req.query.name;
    let searchob=adminmodel.searchpro(name);
        searchob.then((re)=>{
        res.send(re);
        }).catch((err)=>{
            console.log(err);
        })
});