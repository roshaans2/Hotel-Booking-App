const Room = require("../models/Room.js")
const Hotel = require("../models/Hotel.js")

const createError = require("../utils/error.js")

const createRoom = async (req,res,next) => {
    const hotelid = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelid,{
                $push:{rooms:savedRoom._id}
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

const updateRoom = async(req,res,next) =>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)
    }
}

const deleteRoom = async(req,res,next) =>{
    const hotelid = req.params.hotelid
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelid,{
                $pull:{rooms:req.params.id}
            })
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        next(error)
    }
}


const getRooms = async(req,res,next) =>{
    try{
        const hotels = await Room.find()
        res.status(200).json(hotels)
    }
    catch(error){
        next(error)
    }
}

const getRoom = async(req,res,next) =>{
    try {
        const hotel = await Room.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createRoom,
    updateRoom,
    deleteRoom,
    getRooms,
    getRoom
}