import Form from "./Form";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center xl:justify-around xl:top-7 xl:w-full items-center absolute top-0">
      <div className="mx-2  lg:w-[507px] lg:h-[285px] lg:-mt-[150px] mt-24 xl:mt-9">
        <h3 className="roboto-bold text-3xl md:text-4xl lg:text-5xl z-10">
          Take great online Courses from anywhere in the world
        </h3>
        <p className="lato-regular text-lg lg:text-xl">
          The world of education is at your fingertips! No longer bound by
          location, you can access incredible online courses from top
          universities, industry experts, and creative minds across the globe.
          With flexible schedules and a variety of topics to choose from, you
          can pursue new skills, deepen your knowledge, and achieve your
          learning goals – all from the comfort of your home.
        </p>
      </div>
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default Hero;
