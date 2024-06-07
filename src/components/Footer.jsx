import Form from "./Form";
import footerImage from "../assets/Footer.png";

const Footer = () => {
  return (
    <div className="relative mt-6">
      <img
        src={footerImage}
        className="absolute top-96 -left-40 md:-left-40"
        alt=""
      />
      <div className="md:w-2/3 md:mx-auto absolute left-[17%] lg:left-[27%] ">
        <Form />
        <div className="m-2">
          <h3 className="roboto-bold text-2xl md:text-3xl lg:text-5xl">
            Lorem ipsum dolor sit amet, consetetur
          </h3>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            aut voluptatum fugiat non?
          </p>
        </div>
        <p className="roboto-regular text-center">
          &copy; 2021 Octet Design Studio
        </p>
      </div>
    </div>
  );
};

export default Footer;
