var config = require('./dbconfig');
const sql = require('mssql');

//--------------------------------------------------------------------------------------//
//FULL DATABASE TABLE API
async function getMentors() {
    try {
        let pool = await sql.connect(config);
        let mentorpro = await pool.request().query("SELECT * from Mentors");
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
            .query("SELECT * from MentorInfo where Id = @input_parameter");
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
            .input('Name', sql.VarChar, Mentor.Name)
            .input('Email', sql.VarChar, Mentor.Email)
            .input('Description', sql.VarChar, Mentor.Description)
            .input('Placements', sql.VarChar, Mentor.Placements)
            .input('Image', sql.VarChar, Mentor.Image)
            .input('Phone', sql.VarChar, Mentor.Phone)
            .input('Linkedin', sql.VarChar, Mentor.Linkedin)
            .input('Insta', sql.VarChar, Mentor.Insta)
            .execute('INSERTDATA');

        return Mentor;


    }
    catch (err) {
        console.log(err);
    }

}
//--------------------------------------------------------------------------------------//
async function deleteMentor(MentorId) {
    try {
        let pool = await sql.connect(config);
        let mentorpro = await pool.request()
            .input('input_parameter', sql.Int, MentorId)
            .query("DELETE from MentorInfo where MentorIDPR = @input_parameter");
        return mentorpro.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    getMentors: getMentors,
    getMentor : getMentor,
    addMentor : addMentor,
    deleteMentor : deleteMentor
}
