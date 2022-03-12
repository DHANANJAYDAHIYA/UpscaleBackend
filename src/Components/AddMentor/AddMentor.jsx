import "./AddMentor.css";
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
    <body>
    <div className="container">
      {/* <button onClick={setaddmentorOpen = {true}}></button> */}
      <form id= "contact" onSubmit={(e) => submit(e)}>
        <h3>Add New Mentor</h3>
        <h4>Fill all the details in the form</h4>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorID" value={mentor.MentorID} placeholder="MentorID" type="number" tabIndex="1" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorNAME" value={mentor.MentorNAME} placeholder="MentorNAME" type="text"  tabIndex="2" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorEMAIL" value={mentor.MentorEMAIL} placeholder="MentorEMAIL" type="text"  tabIndex="3" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorPH" value={mentor.MentorPH} placeholder="MentorPH" type="text"  tabIndex="4" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorLINKEDIN" value={mentor.MentorLINKEDIN} placeholder="MentorLINKEDIN" type="text"  tabIndex="5" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorINSTA" value={mentor.MentorINSTA} placeholder="MentorINSTA" type="text"  tabIndex="6" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="MentorPM" value={mentor.MentorPM} placeholder="MentorPM" type="text"  tabIndex="7" required autofocus/>
        </fieldset>
        <button name="submit" type="submit" id="contact-submit" >Submit</button>
      </form>
    </div>
    </body>
  )
}
export default AddMentor;