const express = require("express");
const  Hotel  = require("../models/Hotel.js");
const  createError  = require("../utils/error.js");
const {createHotel,updateHotel,deleteHotel,getHotels,getHotel} = require("../controllers/hotel.js");
const { verifyAdmin, verifyUser } = require("../utils/verifyToekn.js");


const router = express.Router()

router.post("/",verifyAdmin,createHotel)

router.put("/:id",verifyAdmin,updateHotel)
router.delete("/:id",verifyAdmin,deleteHotel)
router.get("/",getHotels);
router.get("/:id",getHotel)


module.exports = router;