const express = require('express');
const cors = require('cors');
const dbOperation= require('./dbfiles/dbOperation.js');
const Mentors = require('./dbfiles/Mentors.js');
const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', function(req,res) {
    console.log('called');
    res.send({result: 'List of all tasks'})
})
app.post('/quit', function(req,res) {
    console.log('called quit');
    res.send({result: 'List of quit tasks'})
})

let Pam = new Mentors(3, 'Dev Dahiya', '2000-01-01 00:00:01' , 'Dhananjaydahiya236@gmail.com', '8447988861', 'google.com' , 'google.com' , 'accenture')

// dbOperation.getMentors().then(res=>{
//     console.log(res.recordset);
// })
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

// dbOperation.CreateMentors(Pam);