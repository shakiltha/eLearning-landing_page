import marketingIcon from "../assets/megaphone_announcement_icon.png";
import paintDesignIcon from "../assets/art_paint_design_icon.png";
import codingIcon from "../assets/programming_binary_icon.png";
import musicIcon from "../assets/musicIcon.png";
import businessPresentation from "../assets/business-presentation-dashboard.png";

const AvailableCourses = () => {
  return (
    <div className="p-2 my-4 bg-[#024547] xl:m-2 xl:p-14 xl:flex xl:justify-center xl:items-center">
      <div className="p-2 w-[300px] h-[270px] md:h-[320px] mx-auto">
        <section className="flex justify-center xl:justify-start">
          <h2 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-white text-white text-center lg:text-left">
            Available Courses
          </h2>
        </section>
        <p className="lato-regular text-lg mx-2 text-white text-center lg:text-left">
          E-learning isn't about limitations, it's about exploration! From
          mastering social media tactics in marketing to animating your artistic
          vision, e-learning offers a vast playground. Tech wizards can delve
          into coding languages like Python or build websites.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 place-items-center mx-2 mt-14 md:mt-22 gap-2 xl:gap-4 lg:grid-cols-5 xl:grid-cols-3 xl:grid-rows-2 xl:mr-52">
        <div className="hidden xl:block"></div>
        <div className=" p-2 shadow-lg w-[150px] h-[200px] bg-white rounded-lg">
          <img src={marketingIcon} alt="" />
          <h5>Learn</h5>
          <h3>Marketing</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px] bg-white rounded-lg">
          <img src={paintDesignIcon} alt="" />
          <h5>Learn</h5>
          <h3>Art & Design</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px] bg-white rounded-lg">
          <img src={codingIcon} alt="" />
          <h5>Learn</h5>
          <h3>Coding</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px] bg-white rounded-lg">
          <img src={musicIcon} alt="" />
          <h5>Learn</h5>
          <h3>Music</h3>
        </div>
        <div className="p-2 shadow-lg w-[150px] h-[200px] bg-white rounded-lg">
          <img src={businessPresentation} alt="" />
          <h5>Learn</h5>
          <h3>Busniness</h3>
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;
