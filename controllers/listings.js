const Listing = require("../models/listing.js");
const { ListingSchema } = require("../schema.js"); // path ko apne hisaab se set karo




module.exports.index = ( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs"); 
};


module.exports.showListing = async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews",
     populate: {
        path:"author",
    },
})
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requessted for does not exist!");
        res.redirect("/listings")
    }
    console.log(listing);

    res.render("listings/show",{listing})
};

module.exports.CreateListing = (async(req,res,next)=>{

    let url = req.file.path;
    let filename = req.file.filename
   
       
    if(!req.body.listing){
     throw new ExpressError(400,"Send Valid Data for listing");
    }
    
    result = ListingSchema.validate(req.body);
    console.log(result)
     let newlisting = new Listing (req.body.listing);
     newlisting.owner = req.user._id;
     newlisting.image = {url,filename}
     await newlisting.save();
     req.flash("success","New Listing Created");
     res.redirect("/listings");

});

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requessted for does not exist!");
        res.redirect("/listings")
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl= originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit",{listing ,originalImageUrl});
    
};


module.exports.UpdateListing = async(req,res)=>{
    // if(!req.body.listing){
    //     throw new ExpressError(400,"Send Valid Data for listing");
    //    }
    let {id} = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if (typeof req.file !== "undefined"){

        let url = req.file.path;
        let filename = req.file.filename;
        listing.image =  {url,filename};
        await listing.save();

    }
   

    req.flash("success"," Listing Updated");
    res.redirect(`/listings/${id}`) 
};

module.exports.DestroyListing = async(req,res)=>{
    let {id} = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);;
    console.log(deletedlisting);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
};