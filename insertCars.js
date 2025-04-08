const mongoose = require('mongoose');

// MongoDB connection URI (replace it with your actual URI)
const mongoURI = "mongodb+srv://amankhan19989270mi:CkpibBN9Jgit7rwL@cluster0.esqmdwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Define the car schema
const carSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  fuelType: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  image: { type: String, required: true }
});

// Create the model
const Car = mongoose.model('Car', carSchema);

// Data to insert
const cars = [
  { id: 1, name: "Toyota Camry", brand: "Toyota", price: 25000, fuelType: "Gasoline", seatingCapacity: 5, image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/11344/1733916451269/front-left-side-47.jpg?impolicy=resize&imwidth=420" },
  { id: 2, name: "Honda Accord", brand: "Honda", price: 23000, fuelType: "Hybrid", seatingCapacity: 5, image: "https://pictures.dealer.com/b/bryanhonda/0987/59dd9179311d4f1203be0b20cb4dbe4ex.jpg" },
  { id: 3, name: "Tesla Model S", brand: "Tesla", price: 75000, fuelType: "Electric", seatingCapacity: 5, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/93821/model-s-exterior-front-view.jpeg?q=80" },
  { id: 4, name: "Ford Mustang", brand: "Ford", price: 35000, fuelType: "Gasoline", seatingCapacity: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2yxx2PA-w8ZcKnlzHwQbep3Km8i3gj0YZw&s" },
  { id: 5, name: "Chevrolet Malibu", brand: "Chevrolet", price: 27000, fuelType: "Gasoline", seatingCapacity: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LHruZW-YZs0TGC6TaOJUHvVfOFCGLWySfg&s" },
  { id: 6, name: "BMW 3 Series", brand: "BMW", price: 43000, fuelType: "Gasoline", seatingCapacity: 5, image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/37067/3-series-exterior-left-rear-three-quarter-2.jpeg?q=80&q=80" },
  { id: 7, name: "Audi A4", brand: "Audi", price: 50000, fuelType: "Diesel", seatingCapacity: 5, image: "https://www.carscoops.com/wp-content/uploads/2022/06/Audi-A4-Avant-Carscoops-Rendering-main-1024x555.jpg" },
  { id: 8, name: "Mercedes-Benz C-Class", brand: "Mercedes-Benz", price: 55000, fuelType: "Hybrid", seatingCapacity: 5, image: "https://www.financialexpress.com/wp-content/uploads/2022/05/Mercedes-Benz-C-Class-1.jpg" },
  { id: 9, name: "Porsche 911", brand: "Porsche", price: 95000, fuelType: "Gasoline", seatingCapacity: 2, image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/39232/911-exterior-right-front-three-quarter-154382.jpeg?isig=0&wm=1&q=80&q=80" },
  { id: 10, name: "Chevrolet Corvette", brand: "Chevrolet", price: 67000, fuelType: "Gasoline", seatingCapacity: 2, image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2025/performance/corvette-z06/mov/01-images/2025-z06-masthead-01.png?imwidth=1200" },
  { id: 11, name: "Nissan Leaf", brand: "Nissan", price: 30000, fuelType: "Electric", seatingCapacity: 5, image: "https://cdn1.smartprix.com/rx-iUV2qqNDa-w420-h420/nissan-leaf.webp" },
  { id: 12, name: "Ford F-150", brand: "Ford", price: 45000, fuelType: "Gasoline", seatingCapacity: 5, image: "https://www.usatoday.com/gcdn/-mm-/21adbb53cdea9350e9cd11589397f800715bbe27/c=785-0-4498-3713/local/-/media/2018/01/04/USATODAY/USATODAY/636506771585938650-02-ford-f-150-2018-exterior-front-white.jpg" },
  { id: 13, name: "Hyundai Elantra", brand: "Hyundai", price: 22000, fuelType: "Gasoline", seatingCapacity: 5, image: "https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-elantra-n-lightning-lap-2025-178-67b0a408c7cd0.jpg?crop=0.590xw:0.498xh;0.232xw,0.310xh&resize=2048:*" },
  { id: 14, name: "Kia Sorento", brand: "Kia", price: 42000, fuelType: "Hybrid", seatingCapacity: 7, image: "https://hips.hearstapps.com/hmg-prod/images/21907-2024-sorento-sx-prestige-x-pro-65f5d3f95ab77.jpg?crop=0.609xw:0.456xh;0.152xw,0.315xh&resize=1200:*" }
];

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Car.insertMany(cars); // Insert the car data into the collection
  })
  .then(() => {
    console.log('Cars data inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting cars data:', err);
  });
