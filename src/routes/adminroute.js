let adminctrl=require("../controllers/adminctrl.js");

let express=require("express");
let router=express.Router();

//navbar
router.get("/",adminctrl.displaynav);

//home
router.get("/home",adminctrl.homepage);
//category
router.get("/addcate",adminctrl.addcategory);
router.post("/savecate",adminctrl.savecategory);
router.get("/viewcate",adminctrl.viewcategory);
router.get("/deletecate",adminctrl.deletecategoryy);
router.get("/updatecate",adminctrl.updatecategory);
router.post("/saveupdatecate",adminctrl.saveupdatecate);
router.get("/searchcate",adminctrl.searchcategory);

//product
router.get("/addprod",adminctrl.addproduct);
router.post("/saveprod",adminctrl.saveproduct);
router.get("/viewprod",adminctrl.viewproduct);
router.get("/updateprod",adminctrl.updateprod);
router.post("/saveproduct",adminctrl.finalupdateprod);
router.get("/deleteprod",adminctrl.deleteproduct);
router.get("/productsearch",adminctrl.searchproduct);
module.exports=router;