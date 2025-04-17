const express =  require("express");
const router =  express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing")
const Review = require("../models/review")
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware")
const ReviewController = require("../controllers/Review")





// Post Review Route

router.post("/",isLoggedIn,validateReview,wrapAsync(ReviewController.CreateReview));


// Delete Review Route

router.delete("/:reviewsId",isLoggedIn,isReviewAuthor, wrapAsync(ReviewController.DestroyReview));





module.exports = router;