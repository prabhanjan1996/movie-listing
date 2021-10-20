
const { Router } = require("express") // express importing and assign to router
const { Resp } = require("src/helpers") // helper file for return response status purpose
const { UserModel, MovieModel} = require("src/models") // including the models into controllers
const authenticates = require('src/config/authorisation') // Authorization of user function
const bcrypt = require('bcryptjs') // for encrypt or hash the user password
const jwt = require('jsonwebtoken') // jwt token for authentication

const mongoose = require('mongoose')
const userModel = require("src/models/user.model")
const router = Router()

const create =  (req, res) => {
    const { email, phone,password} = req.body 
    // Encrypting the password and storing it in hashedPass
    bcrypt.hash(password, 10, function(error, hashedPass){ //hashedPass is for encript the password
        if(error){
            return Resp.notMatch(res,"Decrypt:password did not matched")
        }
        // Find the user is already existing in DB or not, If not create the user
        UserModel.findOne({phone}).exec((error, user) => { // find by phone number
            if(user){
                return Resp.return(res,error,"Phone already exist","enter alternate phone number");
            }else{
                                
                //Register new user and save
                UserModel.create({_id: new mongoose.Types.ObjectId, email: email,
                    phone: phone,password: hashedPass },(error, doc) => {// Hash password calling from bcrypt 
                        return Resp.created(res, error,doc, ' registered successfully')
                    
                    })
            
            }
           
        }) 
    })       
}
router.post('/createUser', create)




// User Login 
const login = (req, res, next) => {
    var username = req.body.username // username for login
    var password = req.body.password // password for Login
    UserModel.findOne({$or: [{email:username},{phone:username}]}) // you can login with email or phone
    .then(admin => {
        if(admin){
            bcrypt.compare(password, admin.password,  function(error, result){ // compare your entered text password with stored hashedpassword 
                if(error){
                   return Resp.notMatch(res,"Decrypt:password did not matched")
                }
                if(result){
                    var  token = jwt.sign({
                        userId: admin.id
                    },  process.env.JWT_SECRET ,
                          {
                              expiresIn: '1h'
                            })
                    res.cookie("t", token, {expire: new Date() + 9999}); // jwt token generation
                    return Resp.success(res,"login success",token);
                }else{
                    return Resp.notMatch(res,"password did not matched")
                }
            })
        }else{
           return Resp.noRecord(res,"No user found");
        }
    })
}
router.post('/userLogin', login)


// Get all the Movies details from movies Collection
const getAll = (req, res) => {
    try{
        MovieModel.find({}, (error, docs) => {
        return Resp.return(res, error, docs, 'records retrived')
    })
}
    catch(err) {
        console.log(err);
    }
}
router.get('/all',authenticates.authenticate, getAll)



// get movies group by genres
const getMovies = async(req, res) => {
  await MovieModel.aggregate([
    {$unwind:"$genres"}, // seperate the array of object id in single objects
    {  
      $group: { _id: "$genres"  , // groups by single objects and displaying the values
    Movies: { $push: { director: "$director",imdb_rating:"$imdb_rating",
                      length:"$length",poster:"$poster", title:"$title", backdrop:"$backdrop",
                      overview:"$overview",released_on:"$released_on",slug:"$slug",classification:"$classification"
                    }} // display the fields groupBy
  }
   },
    
 ]).   
  exec(function (error, docs){
      return Resp.return(res, error, docs, 'records retrived')
  })
}

router.get('/getMovies',authenticates.authenticate, getMovies)

module.exports = UserCrud = router  