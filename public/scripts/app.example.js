class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    // await this.load();

    // // Register click listener
    // this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      this.carContainerElement.innerHTML += car.render();
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
}