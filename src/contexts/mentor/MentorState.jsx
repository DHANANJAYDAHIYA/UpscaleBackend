import {useState} from "react";
import MentorContext from "./MentorContext";

const MentorState = (props) => {

  const [mentorList, setmentorList] = useState([]);
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
    <MentorContext.Provider value={{mentor, setmentor , mentorList}}>{props.children}</MentorContext.Provider>
  );
};

export default MentorState;
