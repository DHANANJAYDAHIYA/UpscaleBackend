import "./AddMentor.scss";
import ClearIcon from "@mui/icons-material/Clear";
import MentorContext from "../../contexts/mentor/MentorContext";
import {useContext} from "react";

const AddMentor = ({setaddmentorOpen, addmentorOpen}) => {
  const context = useContext(MentorContext);
  const {mentor, setmentor} = context;

  const handleCross = () => {
    setaddmentorOpen(!addmentorOpen);
  };

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({value: e.target.value});
    }
    setmentor({...mentor, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setaddmentorOpen(!addmentorOpen);
    console.log("submitted");
  };
  return (
    <form className="mentorForm" onSubmit={onSubmit}>
      <div className="form-header">
        <h1>Add a mentor</h1>
        <ClearIcon className="icon" onClick={handleCross} />
      </div>
      <input type="text" name="MentorID" placeholder="Mentor ID" onChange={onChange} />
      <input name="MentorNAME" placeholder="Full Name" onChange={onChange} />
      <input name="MentorEMAIL" placeholder="Email" onChange={onChange} />
      <input name="MentorPH" placeholder="Phone No." onChange={onChange} />
      <input name="MentorLINKEDIN" placeholder="Linkedin ID" onChange={onChange} />
      <input name="MentorPM" placeholder="Placements" onChange={onChange} />
      <button type="submit">Add Mentor</button>
    </form>
  );
};

export default AddMentor;
