const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB URI
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

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define GET route for `/cars`
app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find(); // Get all cars from the collection
    res.json(cars); // Return the cars data
  } catch (err) {
    res.status(500).json({ message: "Error fetching cars", error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
