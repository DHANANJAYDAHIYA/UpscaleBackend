import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import MarkDownEdit from './markdown.js'
export default function App() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBBtn tag='a' onClick={toggleShow}>
        Create Question
      </MDBBtn>
      <MDBCollapse show={showShow}>
          <MarkDownEdit/>
      </MDBCollapse>
    </>
  );
}