let adminctrl=require("../controllers/adminctrl.js");

let express=require("express");
let router=express.Router();

router.get("/",adminctrl.displaynav);
router.get("/addcate",adminctrl.addcategory);
router.post("/savecate",adminctrl.savecategory);
router.get("/viewcate",adminctrl.viewcategory);
router.get("/deletecate",adminctrl.deletecategoryy);
router.get("/updatecate",adminctrl.updatecategory);
router.post("/saveupdatecate",adminctrl.saveupdatecate);
router.get("/searchcate",adminctrl.searchcategory);
module.exports=router;