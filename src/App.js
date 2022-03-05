// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState}from 'react'


// import Navbar from './Components/Navbar.js'
import Card from './Components/Card/Card.js'
function App() {
  const [returnedData, SetReturnedData]= useState(['Hello']);
  const [mentor, SetMentor] = useState({
    MentorID: 0, 
    MentorNAME:'', 
    CreatedOn:'' , 
    MentorEMAIL:'', 
    MentorPH:'', 
    MentorLINKEDIN:'' , 
    MentorINSTA:'' , 
    MentorPM:''
  })

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if(name === 'MentorID'){
      SetMentor(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    SetMentor(prevState =>({
      ...prevState,
      [name]:value
    }));
  }
  const fetchData = async () => {
    console.log(mentor);
    const newData = await fetch('/hello', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: mentor.Fullname
      })
    })
    .then(res=> res.json())
    console.log(newData);
    SetReturnedData(newData[0])
  }
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light justify-content-between">
              <a className="navbar-brand">Navbar</a>
              <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>fetchData()}>Search</button>
                  <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>fetchData()}>Create</button>
                  <input type = "number" name="MentorID" placeholder="Mentor ID" onChange={setInput}></input>
                  <input  name="MentorNAME" placeholder="Full Name" onChange={setInput}></input>
                  <input name="CreatedON" placeholder="Created On" onChange={setInput}></input>
                  <input name="MentorEMAIL" placeholder="Email" onChange={setInput}></input>
                  <input name="MentorPH" placeholder="Phone No." onChange={setInput}></input>
                  <input name="MentorLINKEDIN" placeholder="Linkedin ID" onChange={setInput}></input>
                  <input name="MentorINSTA" placeholder="Insta ID" onChange={setInput}></input>
                  <input name="MentorPM" placeholder="Placements" onChange={setInput}></input>
    
              </form>
          </nav>
          {/* <p>MentorID:{returnedData.MentorID}</p>
          <p>MentorName:{returnedData.MentorName}</p>
          <p>CreatedON:{returnedData.CreatedON}</p>
          <p>MentorEMAIL:{returnedData.MentorEMAIL}</p>
          <p>MentorPH:{returnedData.MentorPH}</p>
          <p>MentorLINKEDIN:{returnedData.MentorLINKEDIN}</p>
          <p>MentorINSTA:{returnedData.MentorINSTA}</p>
          <p>MentorPM:{returnedData.MentorPM}</p> */}
        
        <div className="row row-cols-1 row-cols-md-5 g-1 mx-4 my-2">
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          <Card title="Dhananjay Dahiya" des="I am a developer asbjdwbnqoindqjpwmdwq" imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" createdat="2015-07-20"/>
          
        </div>
    </div>
    
  );
}

export default App;
