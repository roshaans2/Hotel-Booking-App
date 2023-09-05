const express = require("express")

const router = express.Router()





const  User  = require("../models/User.js");
const  createError  = require("../utils/error.js");
const {updateUser,deleteUser,getUsers,getUser} = require("../controllers/user.js");
const {verifyToken,verifyUser,verifyAdmin} = require("../utils/verifyToekn.js");


// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin, you are logged in and you can delete all account")
// })

router.put("/:id",verifyUser,updateUser)
router.delete("/:id",verifyUser,deleteUser)
router.get("/",verifyAdmin,getUsers);
router.get("/:id",verifyUser,getUser)


module.exports = router;
