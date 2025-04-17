const express =  require("express");
const router =  express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const{isLoggedIn,isowner,validateListing} =  require("../middleware");
// const {ListingSchema} = require("../schema")

const listingController = require("../controllers/listings");
const multer  = require('multer');
const {storage} = require("../cloudConfig")
const upload = multer({ storage })


router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),wrapAsync(listingController.CreateListing));



// New Route

router.get("/new",isLoggedIn, listingController.renderNewForm)

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isowner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.UpdateListing))
.delete(isLoggedIn,isowner,wrapAsync(listingController.DestroyListing));



// Edit Route
router.get("/:id/edit",isLoggedIn,isowner,wrapAsync(listingController.renderEditForm)); 


module.exports = router;

