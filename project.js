// Projenin Ana Js Dosyası

const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatma

const ui = new UI();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addCar);
  document.getElementById("car-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submit işlemini durdur
  });
}

function addCar(e) {
  const title = titleElement.value;
  const price = priceElement.value;
  const url = urlElement.value;

  if (title === "" || price === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurunuz.","danger");
  } 
  else {

    // yeni araç

    const newCar = new Car(title, price, url);

    ui.addCarToUI(newCar); // arayüze araç ekleme yapar
    ui.displayMessages("Araç başarıyla eklendi.","success");
  }

  ui.clearInputs(titleElement, priceElement, urlElement);
}
