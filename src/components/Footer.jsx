import Form from "./Form";
// import footerImage from "../assets/Footer.png";
import footerImage from "../assets/Footer-cropped.png";

const Footer = () => {
  return (
    <div className="relative mt-6">
      <img
        src={footerImage}
        className="absolute hidden md:block top-96 z-10"
        alt=""
      />
      {/* <div className="white xl:w-full xl:h-80 border-gray-500 absolute xl:z-40 top-[51rem] text-black bg-white">
        an empty div
      </div> */}
      <div className="md:w-2/3 md:mx-auto absolute md:left-[17%] lg:left-[27%] xl:flex xl:items-center z-50 ">
        <Form />
        <div className="m-2 lg:w-96 xl:w-full lg:text-center">
          <h3 className="roboto-bold text-2xl md:text-3xl lg:text-4xl">
            Lorem ipsum dolor sit amet, consetetur
          </h3>
          <p className="lato-regular text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            aut voluptatum fugiat non?
          </p>
          <p className="roboto-regular text-center xl:absolute xl:mt-96 xl:ml-64">
            &copy; 2021 Octet Design Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
