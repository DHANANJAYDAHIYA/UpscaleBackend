import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import AddMentors from '../AddMentor/AddMentor.jsx'
export default function App() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBBtn tag='a' onClick={toggleShow}>
        Add Mentor
      </MDBBtn>
      <MDBCollapse show={showShow}>
          <AddMentors/>
      </MDBCollapse>
    </>
  );
}