import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MentorCard.scss";
import Collapsible from "../MentorCard/collapsible.js"
// Buffer.from('anything','base64');
import Axios  from "axios";
const UseEffectAPI = () => 
{

  const [mentors, setmentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getMentors = async () => 
  {
    const response = await fetch("http://localhost:8090/api/MentorEle");
    setmentors(await response.json());
  };
  const deleteMentr= (id)=>
  {
    // let url = "http://localhost:8090/api/MentorEle/delete/" ;
    Axios.get(`http://localhost:8090/api/MentorEle/delete/${id}`)
    .then(() => {return document.location.reload();})
  }
  function search(curElem) {
       return 
  }
  useEffect(() => {getMentors();}, []);
  // let base64ImageString = 
  return (
    <>
      <form className="search ">
        <input type="text" 
          id="search-bar" 
          placeholder="Start Searching by Name / Company"
          onChange={(event)=>{setSearchTerm(event.target.value); console.log(searchTerm);}}
        />
        <a href=""><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </form>
      
      <Collapsible className="collapsible-btn"/>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          { 
            mentors.filter((curElem) => {
              if(searchTerm=="") return curElem
              else if(curElem.Name.toLowerCase().includes(searchTerm.toLowerCase()))
              {
                return curElem
              }
            }
          ).map(curElem => (
              <div className="col-10 col-md-2 mt-5" key={curElem.ID}>
                <div className="container1">
                  <div className="card-1 p-2 card-div">
                    <div className="like-icon-div "></div>
                    <div className="gow-img-div img-div">
                      <img
                        src="https://freesvg.org/img/publicdomainq-business-man-strong.png"
                        alt="god-of-war-figurine"
                      />
                      {/* <img src={"data:image/jpg;base64,"+ Buffer.from(curElem.Image).toString('base64')} />  */}
                    </div>
                    <div className="text-container">
                      <div className="container2">
                        <div className="content">
                          <h1>{curElem.Name}</h1>
                          <hr />
                          <h4> Placed at: {curElem.Placements}</h4>
                          {/* <h4> Skills: c++, dsAlgo, ReactJS</h4> */}
                          <div className="options">
                            <p>
                              Zombie ipsum reversus ab viral inferno, nam rick
                              grimes malum cerebro.
                            </p>
                          </div>
                          <div className="media">
                            <ul>
                              <li>
                                <a className="twitter" href="#">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a className="instagram" href="#">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a className="trash"  onClick={()=>deleteMentr(curElem.ID)}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
