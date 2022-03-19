import React ,{useState}from 'react'
import "./style.css"
import Mdr from 'react-markdown'
import Collapsible from './collapsible.js'
const Markdownreact = () => {
    const[markDown, setmarkDown]= useState("Add Question");
    
  return (
      
    <>
    <div className="containermark">
        <form className="form-containermark">
            <h1 className="headingnew">Title</h1>
            <input className = "form-control" placeholder="Please Enter Title "/>
            <h1 className="headingnew">Tags</h1>
            <input className = "form-control" placeholder="Please Enter Tags (Separating with , )"/>
        
            <h1 className="headingnew">Body</h1>
            <textarea 
                className="left-side"
                value={markDown}
                onChange={(e) => setmarkDown(e.target.value)}></textarea>
            <div className="right-side">
                <Mdr>{markDown}</Mdr>
            </div>
        </form>
    </div>
    </>
  )
}

export default Markdownreact