
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
router.route('/MentorEle/add').post((request,response)=>{

    let Mentor = {...request.body}

    dboperations.addMentor(Mentor).then(result => {
       response.json(result);
    })

   //  response.json(Mentor);

})

//--------------------------------------------------------------------------------------//
//DELETE MENTOR API
//TO DO


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);



