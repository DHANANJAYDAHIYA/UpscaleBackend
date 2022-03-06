import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Card from "./Components/Card/Card.js";
import AddMentor from "./Components/AddMentor/AddMentor.jsx";

function App() {
  const [addmentorOpen, setaddmentorOpen] = useState(true);
  const handleAddMentor = () => {
    console.log(addmentorOpen);
    setaddmentorOpen(!addmentorOpen);
  };
 
  return (
    <div className="App">
      <Navbar />
      <div className="addmentor-container" style={addmentorOpen === true ? {display: "none"} : {}}>
        <AddMentor setaddmentorOpen={setaddmentorOpen} addmentorOpen={addmentorOpen} />
      </div>
      <div className="wrapper">
        <div className="admin__header">
          <h2>search</h2>
          <button onClick={handleAddMentor}>Add Mentor</button>
        </div>

        <div className="cards row row-cols-1 row-cols-md-5 g-1 mx-4 my-2">
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
          <Card
            title="Dhananjay Dahiya"
            des="I am a developer asbjdwbnqoindqjpwmdwq"
            imge="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
            createdat="2015-07-20"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
