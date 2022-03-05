const config= require('./dbconfig.js'),
sql =require('mssql');
const getMentors = async(firstname)=> {
    try{
        let pool = await sql.connect(config);
        let Mentors= pool.request().query(`SELECT * from MentorInfo where firstname = '${firstname}'`)
        console.log(Mentors);
        return Mentors;
    }
    catch(error){
        console.log(error);
    }
} 
const CreateMentors = async(Mentor)=> {
    try{
        let pool = await sql.connect(config);
        let Mentors= await pool.request().query(`INSERT INTO MentorInfo VALUES
        (   ${Mentor.MentorID},
            '${Mentor.MentorNAME}',
            '${Mentor.CreatedOn}',
            '${Mentor.MentorEMAIL}',
            '${Mentor.MentorPH}',
            '${Mentor.MentorLINKEDIN}',
            '${Mentor.MentorINSTA}',
            '${Mentor.MentorPM}')`
        )
        console.log(Mentors);
        return Mentors;
    }
    catch(error){
        console.log(error);
    }
} 
module.exports = {
    CreateMentors,
    getMentors
}