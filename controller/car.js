const carUsecase = require("../usecase/car");

exports.getCars = (req, res) => {
    const { manufacture, type, rentPerDay, description, capacity, transmission, year } = req.query;

    // call the usecase
    const data = carUsecase.getCars(manufacture, type, rentPerDay, description, capacity, transmission, year);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.messageCars = (req, res) => {
    const response = {
        message: "ping successfully",
    };
    res.status(200).json(response);
};

exports.getCarsId = (req, res) => {
    const { id } = req.params;

    const data = carUsecase.getCarsId(id);
    if (!data) {
        return res.status(404).json({
            data: null,
            message: `Car with id ${id} is not found!`,
        });
    }
    const response = {
        data: data,
        message: null,
    };

    res.status(200).json(response);
};

exports.addCar = (req, res) => {
    // validate the request from user
    const { manufacture, type, rentPerDay, description, capacity, transmission, year } = req.body;
    if (!manufacture || manufacture == "") {
        return res.status(400).json({
            data: null,
            message: "manufacture must be filled!",
        });
    }
    if (!type || type == "") {
        return res.status(400).json({
            data: null,
            message: "type must be filled!",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return res.status(400).json({
            data: null,
            message: "rentPerDay must be filled!",
        });
    }
    if (!description || description == "") {
        return res.status(400).json({
            data: null,
            message: "description must be filled!",
        });
    }
    if (!capacity || capacity == "") {
        return res.status(400).json({
            data: null,
            message: "capacity must be filled!",
        });
    }
    if (!transmission || transmission == "") {
        return res.status(400).json({
            data: null,
            message: "transmission must be filled!",
        });
    }
    if (!year || year == "") {
        return res.status(400).json({
            data: null,
            message: "year must be filled!",
        });
    }

    const data = carUsecase.addCar(req.body);

    res.status(201).json({
        data,
        message: null,
    });
};

exports.updateCar = (req, res) => {
    const { manufacture, type, rentPerDay, description, capacity, transmission, year } = req.body;
    if (!manufacture || manufacture == "") {
        return res.status(400).json({
            data: null,
            message: "manufacture must be filled!",
        });
    }
    if (!type || type == "") {
        return res.status(400).json({
            data: null,
            message: "type must be filled!",
        });
    }
    if (!rentPerDay || rentPerDay == "") {
        return res.status(400).json({
            data: null,
            message: "rentPerDay must be filled!",
        });
    }
    if (!description || description == "") {
        return res.status(400).json({
            data: null,
            message: "description must be filled!",
        });
    }
    if (!capacity || capacity == "") {
        return res.status(400).json({
            data: null,
            message: "capacity must be filled!",
        });
    }
    if (!transmission || transmission == "") {
        return res.status(400).json({
            data: null,
            message: "transmission must be filled!",
        });
    }
    if (!year || year == "") {
        return res.status(400).json({
            data: null,
            message: "year must be filled!",
        });
    }
    const data = carUsecase.updateCar(req);

    res.status(200).json({
        data,
        message: null,
    });
};

exports.deleteCar = (req, res) => {
    const data = carUsecase.deleteCar(req);

    return res.status(200).json({
        message: "Delete Success",
    });
};