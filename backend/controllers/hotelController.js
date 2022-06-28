import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  // console.log('i am verified admin')
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
}
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.hid, { $set: req.body }, {new: true});
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
}
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.hid);
    res.status(200).json("Hotel has been Deleted.");
  } catch (error) {
    next(error);
  }
}
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hid);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
}
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
}