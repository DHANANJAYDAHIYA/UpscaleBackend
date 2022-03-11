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
// $(function() {
  
// });
  //     let html = "";
  //     $.ajax({
  //     url: "http://localhost:8090/api/MentorEle",
  //     success: function(result) {
  //       $.each(result, function(index, item) {
  //         html +=
  //           '<div class="card bg-light border-dark mb-3" style="max-width: 70rem;">';
  //         html += `<div class="card-header">userid: ${item.MentorID} </div>`;
  //         html += '<div class="card-body">';
  //         html += `<h5 class="card-title">${item.MentorNAME}</h5>`;
  //         html += `<p class="card-text">${item.MentorEMAIL}</p>`;
  //         html += "</div>";
  //         html += "</div>";
  //         html += "</div>";
  //         //using .html() will display one card,use loop to display each card
  //       });
  //       $(".container").html(html);
  //     }
  //   })
  // )
// };
    
export default MentorCard;
