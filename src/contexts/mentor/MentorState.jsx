import {useState} from "react";
import MentorContext from "./MentorContext";

const MentorState = (props) => {
  const mentorList = [];

  const [mentor, setmentor] = useState({
    MentorID: 0,
    MentorNAME: "",
    CreatedOn: "",
    MentorEMAIL: "",
    MentorPH: "",
    MentorLINKEDIN: "",
    MentorINSTA: "",
    MentorPM: "",
  });

  return (
    <MentorContext.Provider value={{mentor, setmentor}}>{props.children}</MentorContext.Provider>
  );
};

export default MentorState;
