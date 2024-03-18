class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="col-12 col-md-4 mb-4">
          <div class="card">
            <img src="${this.image}" class="card-img-top p-3 rounded rounded-5 " style="object-fit: cover; object-position: center; height: 250px;" alt="...">
            <div class="card-body">
              <p class="card-text">${this.manufacture}/${this.type}</p>
              <h5 class="card-title fw-bold">Rp ${this.rentPerDay} /Hari</h5>
              <p class="card-text">${this.description}</p>
              <div>
                <p class=""><img src="images/users.svg" width="20" style="opacity: 45%;" alt=""><span class="ps-2">${this.capacity} Orang</span></p>
                <p class=""><img src="images/settings.svg" width="20" style="opacity: 45%;" alt=""><span class="ps-2">${this.transmission}</span></p>
                <p class=""><img src="images/calendar.svg" width="20" style="opacity: 45%;" alt=""><span class="ps-2">Tahun ${this.year}</span></p>
              </div>
              <a href="#" class="btn btn-hijau mt-2 text-white w-100 py-2">Pilih Mobil</a>
            </div>
          </div>
        </div>
    `;
  }
}
