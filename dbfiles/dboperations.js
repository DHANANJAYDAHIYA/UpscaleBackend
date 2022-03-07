var config = require('./dbconfig');
const sql = require('mssql');
//--------------------------------------------------------------------------------------//
//FULL DATABASE TABLE API
async function getMentors() {
    try {
        let pool = await sql.connect(config);
        let mentorpro = await pool.request().query("SELECT * from MentorInfo");
        return mentorpro.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
//--------------------------------------------------------------------------------------//
//GET MENTOR API
async function getMentor(MentorId) {
    try {
        let pool = await sql.connect(config);
        let mentorpro = await pool.request()
            .input('input_parameter', sql.Int, MentorId)
            .query("SELECT * from MentorInfo where MentorID = @input_parameter");
        return mentorpro.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
//--------------------------------------------------------------------------------------//
//ADD MENTOR API
async function addMentor(Mentor) {

    try {
        let pool = await sql.connect(config);
        let InsertMentorpro = await pool.request()
            .input('MentorID', sql.Int, Mentor.MentorID)
            .input('MentorNAME', sql.NVarChar, Mentor.MentorNAME)
            .input('CreatedOn', sql.NVarChar, Mentor.CreatedOn)
            .input('MentorEMAIL', sql.NVarChar, Mentor.MentorEMAIL)
            .input('MentorPH', sql.NVarChar, Mentor.MentorPH)
            .input('MentorLINKEDIN', sql.NVarChar, Mentor.MentorLINKEDIN)
            .input('MentorINSTA', sql.NVarChar, Mentor.MentorINSTA)
            .input('MentorPM', sql.NVarChar, Mentor.MentorPM)
            .execute('INSERTDATA');
            
        return InsertMentorpro.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}
//--------------------------------------------------------------------------------------//
module.exports = {
    getMentors: getMentors,
    getMentor : getMentor,
    addMentor : addMentor
}