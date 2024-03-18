const carRepo = require("../../repository/car");

exports.getCars = (manufacture, type, rentPerDay, description, capacity, transmission, year) => {
    const data = carRepo.getCars(manufacture, type, rentPerDay, description, capacity, transmission, year);
    return data;
};

exports.getCarsId = (id) => {
    const data = carRepo.getCarsId(id);
    return data;
};

exports.addCar = (payload) => {
    const data = carRepo.addCar(payload);
    return data;
};

exports.updateCar = (update) => {
    const data = carRepo.updateCar(update);
    return data;
};

exports.deleteCar = (deleted) => {
    const data = carRepo.deleteCar(deleted);
    return data;
};