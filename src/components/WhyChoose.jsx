import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon-1.png";
import icon3 from "../assets/Icon-2.png";
import icon4 from "../assets/Group 197.png";

const WhyChoose = () => {
  return (
    <div>
      <div>
        <section className="flex justify-center">
          <h2 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547]">
            Why choose e-learn
          </h2>
        </section>
        <p className="leto-regular text-lg text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet
        </p>
      </div>
      <div>
        <section className="mt-4 ml-3">
          <img src={icon1} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Course accessibility</h5>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            omnis maxime dicta.
          </p>
        </section>
        <section className="mt-4 ml-3">
          <img src={icon2} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Schedule learning</h5>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            omnis maxime dicta.
          </p>
        </section>
        <section className="mt-4 ml-3">
          <img src={icon3} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Record sessions</h5>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            omnis maxime dicta.
          </p>
        </section>
        <section className="mt-4 ml-4">
          <img src={icon4} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Expert institutions</h5>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi
            omnis maxime dicta.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhyChoose;
