import profile1 from "../assets/Image.png";
import profile2 from "../assets/Image-1.png";

const Testimonials = () => {
  return (
    <div>
      <section className="flex justify-center">
        <h3 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547]">
          Testimonials
        </h3>
      </section>
      <section className="w-[350px] h-[250px] lg:w-[561px]  mx-auto border shadow-xl mt-4 p-2">
        <div>
          <img src={profile1} alt="" />
          <h4 className="roboto-bold text-lg">Josh brallins</h4>
          <p className="roboto-regular text-[12px]">mywebsite.com</p>
        </div>
        <p className="roboto-regular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusame
        </p>
      </section>
      <section className="w-[350px] h-[250px] lg:w-[561px]  mx-auto border shadow-xl mt-4 p-2">
        <div>
          <img src={profile2} alt="" />
          <h4 className="roboto-bold text-lg">Dave inau</h4>
          <p className="roboto-regular text-[12px]">mywebsite.com</p>
        </div>
        <p className="roboto-regular">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusame
        </p>
      </section>
    </div>
  );
};

export default Testimonials;
