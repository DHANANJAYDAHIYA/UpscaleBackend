
//--------------------------------------------------------------------------------------//
//LIBRARIES OR DEPENDENCIES 
var Db  = require('./dboperations');
var MentorOR = require('./Mentor');
const dboperations = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/data')
    }
})
var uploadMentor = multer({
   storage: storage 
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();   
})
//--------------------------------------------------------------------------------------//
//FULL DATABASE TABLE API ROUTE
router.route('/MentorEle').get((request,response)=>{

    dboperations.getMentors().then(result => {
      //  console.log(result[0]);
       response.json(result[0]);
    })

})

//--------------------------------------------------------------------------------------//
//GET MENTOR API
router.route('/MentorEle/:id').get((request,response)=>{

    dboperations.getMentor(request.params.id).then(result => {
       response.json(result);
    })

})

//--------------------------------------------------------------------------------------//
//ADD MENTOR API
router.route('/MentorEle/add').post(uploadMentor.single('Image'),(request,response)=>{

    let Mentor = {...request.body}
    dboperations.addMentor(
         Mentor.Name =Mentor.Name,
         Mentor.Email =Mentor.Email,
         Mentor.Placements =Mentor.Placements,
         Mentor.Description =Mentor.Description,
         Mentor.Phone =Mentor.Phone,
         Mentor.Linkedin =Mentor.Linkedin,
         Mentor.Insta =Mentor.Insta,
         Mentor.Image= request.file.filename
       ).then(result => {
       
       response.json(result);
    })

    console.log("SUCCESSFULLY ADDED");

})

//--------------------------------------------------------------------------------------//
//DELETE MENTOR API
router.route('/MentorEle/delete/:id').get((request,response)=>{

   dboperations.deleteMentor(request.params.id).then(result => {
      response.json(result);
   })
   
})

//--------------------------------------------------------------------------------------//

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);


