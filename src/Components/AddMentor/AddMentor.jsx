import "./AddMentor.scss";
import React, {useState} from 'react';
import Axios from 'axios';

function AddMentor(){
  const url="http://localhost:8090/api/MentorEle/add";
  const [mentor, setmentor]= useState({
    MentorID: 0,
    MentorNAME: "",
    CreatedOn: "",
    MentorEMAIL: "",
    MentorPH: "",
    MentorLINKEDIN: "",
    MentorINSTA: "",
    MentorPM: ""
  })
  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      MentorID :mentor.MentorID,
      MentorNAME :mentor.MentorNAME,
      CreatedOn :mentor.CreatedOn,
      MentorEMAIL :mentor.MentorEMAIL,
      MentorPH :mentor.MentorPH,
      MentorLINKEDIN :mentor.MentorLINKEDIN,
      MentorINSTA :mentor.MentorINSTA,
      MentorPM :mentor.MentorPM
    })
  }
  function handle(e){
    const newmentor= {...mentor};
    newmentor[e.target.id]=e.target.value;
    setmentor(newmentor);
    console.log(newmentor);
  }
  return(
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e)=>handle(e)} id="MentorID" value={mentor.MentorID} placeholder="MentorID" type="number" ></input>
        <input onChange={(e)=>handle(e)} id="MentorNAME" value={mentor.MentorNAME} placeholder="MentorNAME" type="text" ></input>
        <input onChange={(e)=>handle(e)} id="MentorEMAIL" value={mentor.MentorEMAIL} placeholder="MentorEMAIL" type="text" ></input>
        <input onChange={(e)=>handle(e)} id="MentorPH" value={mentor.MentorPH} placeholder="MentorPH" type="text" ></input>
        <input onChange={(e)=>handle(e)} id="MentorLINKEDIN" value={mentor.MentorLINKEDIN} placeholder="MentorLINKEDIN" type="text" ></input>
        <input onChange={(e)=>handle(e)} id="MentorINSTA" value={mentor.MentorINSTA} placeholder="MentorINSTA" type="text" ></input>
        <input onChange={(e)=>handle(e)} id="MentorPM" value={mentor.MentorPM} placeholder="MentorPM" type="text" ></input>
        <button> SUBMIT</button>
      </form>
    </div>
  )
}
export default AddMentor;