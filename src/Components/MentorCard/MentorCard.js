import "./MentorCard.scss";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const MentorCard = () => {
  return (
    <div className="mentorcard">
      <div className="header">
        <h3>Chunky Pandey</h3>
        <MailIcon className="icon" />
        <LinkedInIcon className="icon" />
        <LocalPhoneIcon className="icon" />
      </div>
      <div className="line"></div>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      <h5>Placed at: Upscaletalks</h5>
      <h5>Skills: C++ , DsAlgo , ReactJs</h5>

      <div className="utility">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default MentorCard;
