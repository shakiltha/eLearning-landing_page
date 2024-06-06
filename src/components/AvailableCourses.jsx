import marketingIcon from "../assets/megaphone_announcement_icon.png";
import paintDesignIcon from "../assets/art_paint_design_icon.png";
import codingIcon from "../assets/programming_binary_icon.png";
import musicIcon from "../assets/musicIcon.png";
import businessPresentation from "../assets/business-presentation-dashboard.png";

const AvailableCourses = () => {
  return (
    <div>
      <div>
        <section>Available Courses</section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam
          in optio cum.
        </p>
      </div>
      <div></div>
      <div>
        <img src={marketingIcon} alt="" />
        <h5>Learn</h5>
        <h3>Marketing</h3>
      </div>
      <div>
        <img src={paintDesignIcon} alt="" />
        <h5>Learn</h5>
        <h3>Art & Design</h3>
      </div>
      <div></div>
      <div>
        <img src={codingIcon} alt="" />
        <h5>Learn</h5>
        <h3>Coding</h3>
      </div>
      <div>
        <img src={musicIcon} alt="" />
        <h5>Learn</h5>
        <h3>Music</h3>
      </div>
      <div>
        <img src={businessPresentation} alt="" />
        <h5>Learn</h5>
        <h3>Busniness</h3>
      </div>
    </div>
  );
};

export default AvailableCourses;
