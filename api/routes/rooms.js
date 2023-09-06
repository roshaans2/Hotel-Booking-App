const express = require("express")

const { verifyAdmin, verifyUser } = require("../utils/verifyToekn.js");
const {createRoom,updateRoom,deleteRoom,getRooms,getRoom} = require("../controllers/room.js");

const router = express.Router();

router.post("/:hotelid",verifyAdmin,createRoom)

router.put("/:id",verifyAdmin,updateRoom)
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
router.get("/",getRooms);
router.get("/:id",getRoom)

module.exports = router;