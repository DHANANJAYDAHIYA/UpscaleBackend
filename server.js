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

app.post('/api', async(req,res) =>{
    console.log('called');
    const result = await dbOperation.getMentors(req.body.name);
    res.send(result.recordset)
})
app.post('/quit', function(req,res) {
    console.log('called quit');
    res.send({result: 'List of quit tasks'})
})
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

// dbOperation.CreateMentors(Pam);