import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AddMentor from "./Components/AddMentor/AddMentor.jsx";
import MentorCard from "./Components/MentorCard/MentorCard";
import SearchBar from "./Components/SearchBar/SearchBar.jsx"
function App() {
  const [addmentorOpen, setaddmentorOpen] = useState(true);
  const handleAddMentor = () => {
    console.log(addmentorOpen);
    setaddmentorOpen(!addmentorOpen);
  };
  return (
      <div className="App">
        <Navbar />

        <SearchBar />

        <div className="addmentor-container" style={addmentorOpen === true ? {display: "none"} : {}}>
          <AddMentor 
            setaddmentorOpen={setaddmentorOpen} addmentorOpen={addmentorOpen} 
            
          />
        </div>

        <div className="container">
          
          <button type="button" className="button" onClick={handleAddMentor}>Add Mentor</button>
         
        </div>
        <div className="containerneww">
         <h1>Mentors</h1>
         </div>
        <MentorCard />
      </div>
  );
}

export default App;
