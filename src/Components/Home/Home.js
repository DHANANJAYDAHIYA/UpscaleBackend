import React from 'react'
import AddMentor from "../AddMentor/AddMentor.jsx";
import MentorCard from "../MentorCard/MentorCard.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {useState} from 'react'

const Home = () => {
    
    const [addmentorOpen, setaddmentorOpen] = useState(true);
    const handleAddMentor = () => {
        console.log(addmentorOpen);
        setaddmentorOpen(!addmentorOpen);
    };
    return (
        <div>
             <SearchBar />
            <div className="addmentor-container" style={addmentorOpen === true ? {display: "none"} : {}}>
            <AddMentor setaddmentorOpen={setaddmentorOpen} addmentorOpen={addmentorOpen} />
            </div>
            <div className="containerneww">
                <h1>Mentors</h1>
            </div>
            <div className="container">
                <button type="button" className="button" onClick={handleAddMentor}>Add Mentor</button>
            </div>
            <MentorCard />
        </div>
    )
}
export default Home