import "./AddMentor.scss";

import ClearIcon from "@mui/icons-material/Clear";
import React from "react";

const AddMentor = ({setaddmentorOpen, addmentorOpen}) => {
  const handleCross = () => {
    setaddmentorOpen(!addmentorOpen);
  };
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
    <form className="mentorForm" onSubmit={onSubmit}>
      <div className="form-header">
        <h1>Add a mentor</h1>
        <ClearIcon className="icon" onClick={handleCross} />
      </div>
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
