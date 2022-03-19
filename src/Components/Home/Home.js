import React from 'react'
import MentorCard from "../MentorCard/MentorCard.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
const Home = () => {
    return (
        <div>
            <div className="containerneww">
                <h1>Mentors</h1>
            </div>
            <MentorCard />
        </div>
    )
}
export default Home