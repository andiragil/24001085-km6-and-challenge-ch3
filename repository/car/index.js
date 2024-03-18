const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require('uuid');

exports.getCars = (manufacture, type, rentPerDay, description, capacity, transmission, year) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => {
        let filteredStatus = true;
        if (manufacture) {
            filteredStatus =
                filteredStatus &&
                car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
        }
        if (type) {
            filteredStatus =
                filteredStatus &&
                car.type.toLowerCase().includes(type?.toLowerCase());
        }
        if (rentPerDay) {
            filteredStatus =
                filteredStatus &&
                car.rentPerDay == rentPerDay;
        }
        if (description) {
            filteredStatus =
                filteredStatus &&
                car.description.toLowerCase().includes(description?.toLowerCase());
        }
        if (capacity) {
            filteredStatus =
                filteredStatus &&
                car.capacity == capacity;
        }
        if (transmission) {
            filteredStatus =
                filteredStatus &&
                car.transmission.toLowerCase().includes(transmission?.toLowerCase());
        }
        if (year) {
            filteredStatus =
                filteredStatus &&
                car.year == year;
        }


        return filteredStatus;
    });

    return data;
};

exports.getCarsId = (id) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => car.id == id);
    if (data.length == 0) {
        return null;
    }

    return data[0];
};

exports.addCar = (payload) => {
    payload = {
        id: uuidv4(),
        ...payload,
    };

    cars.push(payload);

    return payload;
};

exports.updateCar = (update) => {
    const id = update?.params?.id;
    const updatedCar = {
        id: id,
        ...update.body,
    };

    // Update the data by id
    cars.map((car, index) => {
        if (car?.id == id) {
            cars[index] = updatedCar;
        }
    });

    return updatedCar;
};

exports.deleteCar = (deleted) => {
    const id = deleted?.params?.id;

    index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);

    return deleted;
};
