import profile1 from "../assets/Image.png";
import profile2 from "../assets/Image-1.png";

const Testimonials = () => {
  return (
    <div className="mt-3">
      <section className="flex justify-center">
        <h3 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547]">
          Testimonials
        </h3>
      </section>
      <div className="md:flex">
        <section className="w-[350px] h-[270px] lg:w-[500px]  mx-auto border shadow-xl mt-4 p-2 xl:-mr-6 rounded-xl">
          <div>
            <img src={profile1} alt="" />
            <h4 className="roboto-bold text-lg">Josh brallins</h4>
            <p className="roboto-regular text-[12px]">mywebsite.com</p>
          </div>
          <p className="roboto-regular">
            "E-learning is a game-changer for me! I can fit in learning around
            my work schedule. The bite-sized modules are perfect for quick
            bursts of knowledge, and I can access them from anywhere. Highly
            recommend for anyone who wants to learn on their own time."
          </p>
        </section>
        <section className="w-[350px] h-[280px] lg:w-[500px]  mx-auto border shadow-xl mt-4 p-2 rounded-xl">
          <div>
            <img src={profile2} alt="" />
            <h4 className="roboto-bold text-lg">Dave inau</h4>
            <p className="roboto-regular text-[12px]">mywebsite.com</p>
          </div>
          <p className="roboto-regular">
            "While e-learning offers convenience, I miss the interaction of a
            physical classroom. The online discussions just don't feel the same.
            Also, some topics are better explained by a teacher in person.
            E-learning might be a good supplement, but I wouldn't want it to
            replace traditional classes altogether."
          </p>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
