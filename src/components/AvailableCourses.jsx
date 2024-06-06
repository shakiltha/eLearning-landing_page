import marketingIcon from "../assets/megaphone_announcement_icon.png";
import paintDesignIcon from "../assets/art_paint_design_icon.png";
import codingIcon from "../assets/programming_binary_icon.png";
import musicIcon from "../assets/musicIcon.png";
import businessPresentation from "../assets/business-presentation-dashboard.png";

const AvailableCourses = () => {
  return (
    <div className="my-4">
      <div>
        <section className="flex justify-center">
          <h2 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547]">
            Available Courses
          </h2>
        </section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut veniam
          in optio cum.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 place-items-center mx-2 mt-3">
        <div className=" p-2 shadow-lg w-[150px] h-[200px]">
          <img src={marketingIcon} alt="" />
          <h5>Learn</h5>
          <h3>Marketing</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px]">
          <img src={paintDesignIcon} alt="" />
          <h5>Learn</h5>
          <h3>Art & Design</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px]">
          <img src={codingIcon} alt="" />
          <h5>Learn</h5>
          <h3>Coding</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px]">
          <img src={musicIcon} alt="" />
          <h5>Learn</h5>
          <h3>Music</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px]">
          <img src={businessPresentation} alt="" />
          <h5>Learn</h5>
          <h3>Busniness</h3>
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;
