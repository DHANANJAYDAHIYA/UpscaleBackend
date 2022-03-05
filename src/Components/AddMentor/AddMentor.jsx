import "./AddMentor.scss";

const AddMentor = (addmentorOpen) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form
      className="mentorForm"
      style={addmentorOpen === true ? {display: "none"} : {}}
      onSubmit={onSubmit}>
      <h1>Add a mentor</h1>
      <input type="number" name="MentorID" placeholder="Mentor ID"></input>
      <input name="MentorNAME" placeholder="Full Name"></input>
      <input name="MentorEMAIL" placeholder="Email"></input>
      <input name="MentorPH" placeholder="Phone No."></input>
      <input name="MentorLINKEDIN" placeholder="Linkedin ID"></input>
      <input name="MentorPM" placeholder="Placements"></input>
      <button type="submit">Add Mentor</button>
    </form>
  );
};

export default AddMentor;
