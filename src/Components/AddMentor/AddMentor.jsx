import "./AddMentor.css";
import React, {useState} from 'react';
import Axios from 'axios';

function AddMentor(){
  const url="http://localhost:8090/api/MentorEle/add";
  const [mentor, setmentor]= useState({
    Name: "",
    Email: "",
    Description: "",
    Placements: "",
    Image: "",
    Phone: "",
    Linkedin: "",
    Insta: ""
  })
  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      Name :mentor.Name,
      Email :mentor.Email,
      Description :mentor.Description,
      Placements :mentor.Placements,
      Image :mentor.Image,
      Phone :mentor.Phone,
      Linkedin :mentor.Linkedin,
      Insta :mentor.Insta
    }) 
  }
  function handle(e){
    const newmentor= {...mentor};
    newmentor[e.target.id]=e.target.value;
    setmentor(newmentor);
    console.log(newmentor);
  }
  return(
    <div className="addmentor">
    <div className="container">
      {/* <button onClick={setaddmentorOpen = {true}}></button> */}
      <form id= "contact" enctype="multipart/form-data" onSubmit={(e) => submit(e)}>
        <h3>Add New Mentor</h3>
        <h4>Fill all the details in the form</h4>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Name" value={mentor.Name} placeholder="Name" type="text"  tabIndex="1" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Email" value={mentor.Email} placeholder="Email" type="text"  tabIndex="2" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Description" value={mentor.Description} placeholder="Description" type="text"  tabIndex="3" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Placements" value={mentor.Placements} placeholder="Placements" type="text"  tabIndex="4" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Image" name="Image" value={mentor.Image} placeholder="Image" type="file"  tabIndex="5" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Phone" value={mentor.Phone} placeholder="Phone" type="text"  tabIndex="6" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Linkedin" value={mentor.Linkedin} placeholder="Linkedin" type="text"  tabIndex="7" required autofocus/>
        </fieldset>
        <fieldset>
          <input onChange={(e)=>handle(e)} id="Insta" value={mentor.Insta} placeholder="Insta" type="text"  tabIndex="8" required autofocus/>
        </fieldset>
        
        <button name="submit" type="submit" id="contact-submit" >Submit</button>
      </form>
    </div>
    </div>
  )
}
export default AddMentor;