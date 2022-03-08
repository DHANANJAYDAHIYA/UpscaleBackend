import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AddMentor from "./Components/AddMentor/AddMentor.jsx";
import MentorState from "./contexts/mentor/MentorState";
import MentorCard from "./Components/MentorCard/MentorCard";

function App() {
  const [addmentorOpen, setaddmentorOpen] = useState(true);
  const handleAddMentor = () => {
    console.log(addmentorOpen);
    setaddmentorOpen(!addmentorOpen);
  };

  return (
    <MentorState>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div
            className="addmentor-container"
            style={addmentorOpen === true ? {display: "none"} : {}}>
            <AddMentor setaddmentorOpen={setaddmentorOpen} addmentorOpen={addmentorOpen} />
          </div>

          <div className="admin__header">
            <div className="search">
              <input type="text" className="search-bar" placeholder="Search.." />
              <button>search</button>
            </div>
          </div>
          <div className="container">
            <h1>Mentors</h1>
            <button className="button1" onClick={handleAddMentor}>
              Add Mentor
            </button>
          </div>
          <div className="mentorlist">
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </div>
        </div>
      </div>
    </MentorState>
  );
}

export default App;
