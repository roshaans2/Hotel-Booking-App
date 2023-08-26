const express = require("express");
const  Hotel  = require("../models/Hotel.js");
const  createError  = require("../utils/error.js");

const router = express.Router()

router.post("/", async (req, res) => {

    const { name, type, city, address, distance, title, desc, cheapestPrice } = req.body
    const newHotel = new Hotel({
        name, type, city, address, distance, title, desc, cheapestPrice
    })

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async(req,res)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id", async(req,res)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async(req,res,next)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }
    catch(error){
        return next(error)
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;