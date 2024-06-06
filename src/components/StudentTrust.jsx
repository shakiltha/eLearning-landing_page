import slackIcon from "../assets/Group 376.png";
import microsoft from "../assets/microsoft.png";

const StudentTrust = () => {
  return (
    <div>
      <div className="flex justify-around my-5">
        <section>
          <h4 className="roboto-bold text-2xl md:text-4xl">23,000+</h4>
          <p className="lato-regular text-lg">Active Students</p>
        </section>
        <section>
          <h4 className="roboto-bold text-2xl md:text-4xl">2000+</h4>
          <p className="lato-regular text-lg">Courses</p>
        </section>
      </div>
      <div>
        <p className="roboto-regular text-xl md:text-3xl mx-2 text-center">
          Trusted by 23,000+ happy Students are joining with us for achieve
          their goal
        </p>
        <p className="lato-regular text-lg text-center">Also Featured in</p>
        <section className="flex gap-4 justify-center my-3">
          <section className="flex gap-2">
            <img src={slackIcon} alt="" />
            <span className="roboto-bold">slack</span>
          </section>
          <section className="flex gap-2">
            <img src={microsoft} className="w-[26px] h-[26px]" alt="" />
            <span className="roboto-bold text-[#706D6E]">Microsoft</span>
          </section>
          <section>
            <p className="roboto-bold text-[#3B5998]">facebook</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default StudentTrust;
