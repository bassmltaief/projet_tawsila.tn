const User = require("../models/User");

const Annance = require("../models/Annance");

const addannance = async (req, res) => {
  const {
    point_depart,
    point_darriver,
    descreption,
    Nbr_place,
    voiture,
    phone,
  } = req.body;

  try {
    //1 create a new user
    annance = new Annance({
      point_depart,
      point_darriver,
      descreption,
      Nbr_place,
      voiture,
      phone,
      user: req.user._id,
    });
    //2 save the user
    await annance.save();
    //3 send {token ,user}
    res.send({
      annance,
      // annance: {
      //     point_depart: annanc.point_depart,
      //     point_darriver: annanc.point_darriver,
      //     date_depart: annanc.date_depart,
      //     descreption:annanc.descreption,
      //     Nbr_place:annanc.Nbr_place,
      //     voiture: annanc.voiture,
      //     _id: User._id
      // }
    });
  } catch (error) {
    console.error(error);
  }
};

const annanceModification = async (req, res) => {
  const annanceID = req.params.id;
  try {
    const annanceModified = await Annance.findByIdAndUpdate(
      annanceID,
      { ...req.body },
      { new: true }
    );
    res.send(annanceModified);
  } catch (error) {
    res.send(error);
  }
};

const getAllAnnance = async (req, res) => {
  try {
    const annances = await Annance.find();
    res.send(annances);
  } catch (error) {
    res.send(error);
  }
};

const deleteAnnance = async (req, res) => {
  const AnnanceID = req.params.id;
  try {
    const annanceRemoved = await Annance.findByIdAndDelete(AnnanceID);
    res.send(annanceRemoved);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  addannance,
  annanceModification,
  deleteAnnance,
  getAllAnnance,
};
