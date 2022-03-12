import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MentorCard.css";
import Axios  from "axios";
const UseEffectAPI = () => {
  const [mentors, setmentors] = useState([]);
  const getMentors = async () => {
    const response = await fetch("http://localhost:8090/api/MentorEle");
    setmentors(await response.json());
  };
  const deleteMentr= (id)=>{
    // let url = "http://localhost:8090/api/MentorEle/delete/" ;
    Axios.get(`http://localhost:8090/api/MentorEle/delete/${id}`)
    .then(() => {
      return document.location.reload();
  })
  }
  useEffect(() => {
    getMentors();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {mentors.map((curElem) => {
            return (
              <div className="col-10 col-md-3 mt-5" key={curElem.MentorID}>
                <div class="container1">
                  <div class="card-1 p-2 card-div">
                    <div class="like-icon-div"></div>
                    <div class="gow-img-div img-div">
                      <img
                        src="https://freesvg.org/img/publicdomainq-business-man-strong.png"
                        alt="god-of-war-figurine"
                      />
                    </div>
                    <div class="text-container">
                      <div class="container2">
                        <div class="content">
                          <h1>{curElem.MentorNAME}</h1>
                          <hr />
                          <h4> Placed at: {curElem.MentorPM}</h4>
                          {/* <h4> Skills: c++, dsAlgo, ReactJS</h4> */}
                          <div class="options">
                            <p>
                              Zombie ipsum reversus ab viral inferno, nam rick
                              grimes malum cerebro.
                            </p>
                          </div>
                          <div class="media">
                            <ul>
                              <li>
                                <a class="twitter" href="#">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    class="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a class="instagram" href="#">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    class="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a class="trash"  onClick={()=>deleteMentr(curElem.MentorID)}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <i
                                    class="fa fa-trash"
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
