import Form from "./Form";

const Hero = () => {
  return (
    <div className="flex justify-center xl:justify-around xl:top-7 xl:w-full items-center absolute top-0">
      <div className="mx-2  lg:w-[507px] lg:h-[285px] -mt-[150px] xl:mt-9">
        <h3 className="roboto-bold text-3xl md:text-4xl lg:text-5xl z-10">
          Take great online Courses from anywhere in the world
        </h3>
        <p className="lato-regular text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet, consetetur
        </p>
      </div>
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default Hero;
