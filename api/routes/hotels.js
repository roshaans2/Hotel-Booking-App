const express = require("express");
const  Hotel  = require("../models/Hotel.js");
const  createError  = require("../utils/error.js");
const {createHotel,updateHotel,deleteHotel,getHotels,getHotel} = require("../controllers/hotel.js");


const router = express.Router()

router.post("/",createHotel)

router.put("/:id",updateHotel)
router.delete("/:id",deleteHotel)
router.get("/",getHotels);
router.get("/:id",getHotel)


module.exports = router;