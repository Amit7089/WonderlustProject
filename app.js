if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

console.log(process.env.SECRET) 

const express =  require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/ExpressError");
const {listingSchema,reviewSchema} = require("./schema");
const Review = require("./models/review");
const listingsRouter = require("./routes/listings");
const reviewsRouter =  require("./routes/review");
const userRouter =  require("./routes/user");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");



const dbUrl = process.env.ATLASDB_URL;

main().then(() => {
    console.log('connected to DB');
})
.catch((err) =>{
    console.log(err)
})

async function main(){
    await mongoose.connect(dbUrl)
}


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));



const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret : process.env.SECRET,

    },
    touchAfter : 24 * 3600,
});


store.on("error",() => {
    console.log("ERROR in MONGO SESSION STORE",err);
});

// session
const sessionOptions ={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 100,
        maxAge: 7 * 24 * 60 * 60 * 100,
        httpOnly:true,
    }
};



// app.get("/",(req,res) =>{
//     res.send('Hi I am root')
// })


app.use(session(sessionOptions));
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=> {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});



// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"Amit@70gmail.com",
//         username : "amitahirwar",
//     });
//     let registeredUser =  await User.register(fakeUser,"Amit");
//     res.send(registeredUser);
// })

app.use("/listings",listingsRouter)
app.use("/listings/:id/reviews",reviewsRouter)
app.use("/",userRouter)


// const validateListing = (req,res,next) => {
//     let {error} = listingSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         throw new ExpressError(400,errMsg);
//     }else{
//         next();
//     }
// };

// const validateReview = (req,res,next) => {
//     let {error} = reviewSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         throw new ExpressError(400,errMsg);
//     }else{
//         next();
//     }
// };





app.all("*",(req,res,next) =>{
    next(new ExpressError(404,"Page Not Found!"));
})


app.use((err,req,res,next) =>{
    let {statusCode = 500,message = "Somthing went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message})
});

app.listen(8080,()=>{
    console.log("Server listening to port 8080");
});