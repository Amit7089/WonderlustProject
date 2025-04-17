const express =  require("express");
const router =  express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware")
const UserController =  require("../controllers/user")




router.route("/signup")
.get(UserController.renderSignUpForm)
.post(wrapAsync(UserController.SignUp)
);


router.route("/login")
.get(UserController.renderLoginform)
.post(saveRedirectUrl,passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true,
}),
UserController.login
);




router.get("/logout",UserController.Logout)
module.exports = router;