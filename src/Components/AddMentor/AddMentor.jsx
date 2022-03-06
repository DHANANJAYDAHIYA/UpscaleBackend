import "./AddMentor.scss";
import React, {useState} from "react";
const AddMentor = ({setaddmentorOpen, addmentorOpen}) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    setaddmentorOpen(!addmentorOpen);
    console.log("submitted");
  };

  const [returnedData, SetReturnedData] = useState(["Hello"]);
  const [mentor, SetMentor] = useState({
    MentorID: 0,
    MentorNAME: "",
    CreatedOn: "",
    MentorEMAIL: "",
    MentorPH: "",
    MentorLINKEDIN: "",
    MentorINSTA: "",
    MentorPM: "",
  });

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === "MentorID") {
      SetMentor((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
      return;
    }
    SetMentor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fetchData = async () => {
    console.log(mentor);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          name : mentor.MentorNAME
        }
      )
    })
    .then(res=> res.json())
    console.log(newData);
    SetReturnedData(newData[0])
  };
  return (
    <form
      className="mentorForm"
     
      onSubmit={onSubmit}>
      <h1>Add a mentor</h1>
      <input name="MentorNAME" placeholder="Full Name" onChange={setInput}></input>
      <input name="MentorEMAIL" placeholder="Email" onChange={setInput}></input>
      <input name="MentorPH" placeholder="Phone No." onChange={setInput}></input>
      <input name="MentorLINKEDIN" placeholder="Linkedin ID" onChange={setInput}></input>
      <input name="MentorPM" placeholder="Placements" onChange={setInput}></input>
      <button type="submit" onClick={()=>fetchData()}>Add Mentor</button>
    </form>
  );
};

export default AddMentor;
