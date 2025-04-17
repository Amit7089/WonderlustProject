const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust1";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  
  // Ensure modified array is assigned back properly
  const modifiedData = initData.data.map((obj) => ({
    ...obj,
    owner: "67e58dd586272f5954f28c49",
  }));

  await Listing.insertMany(modifiedData);
  console.log("Data was initialized");
};

initDB();
