const User = require("../models/user")

module.exports.renderSignUpForm = (req,res)=>{
    res.render("user/signup.ejs");

}

module.exports.SignUp = async(req,res)=> {
    try{
        let {username,email,password} =  req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err) {
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust!");
            res.redirect("/listings");
        })
       

    } catch(e) {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    
};

module.exports.renderLoginform = (req,res)=>{
    res.render("user/login.ejs")
};

module.exports.login = async(req,res) =>{
    req.flash("success","Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl );
 };

 module.exports.Logout = (req,res,next) =>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings")
    })
};