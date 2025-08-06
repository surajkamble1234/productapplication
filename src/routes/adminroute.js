let adminctrl=require("../controllers/adminctrl.js");

let express=require("express");
let router=express.Router();

router.get("/",adminctrl.displaynav);
router.get("/addcate",adminctrl.addcategory);
router.post("/savecate",adminctrl.savecategory);
router.get("/viewcate",adminctrl.viewcategory);
module.exports=router;