const express = require("express");
const router = express.Router();
const carController = require("../controller/car");


/* Add routes */
router.get("/", carController.messageCars);
router.get("/cars/", carController.getCars);
router.get("/cars/:id", carController.getCarsId);
router.post("/cars", carController.addCar);
router.put("/cars/:id", carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);


module.exports = router;