import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon-1.png";
import icon3 from "../assets/Icon-2.png";
import icon4 from "../assets/Group 197.png";

const WhyChoose = () => {
  return (
    <div className="lg:flex lg:items-center xl:mb-20 mt-20 md:mt-20">
      <div>
        <section className="flex justify-center xl:justify-start xl:ml-5">
          <h2 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547]">
            Why choose e-learn
          </h2>
        </section>
        <p className="leto-regular text-lg text-center xl:text-left xl:ml-5 xl:mt-4">
          E-learning offers a powerful and convenient way to transform your
          learning experience. Forget rigid schedules and commutes – e-learning
          provides flexibility to fit your busy life. You can learn at your own
          pace, revisit topics for better understanding, and choose from a vast
          array of courses, all at a fraction of the cost of traditional
          education.
        </p>
      </div>
      <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-3">
        <section className="mt-4 ml-3">
          <img src={icon1} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Course accessibility</h5>
          <p className="lato-regular text-lg">
            E-learning shouldn't have limitations! Accessible courses ensure
            everyone can participate and benefit from the wealth of knowledge
            available online. This means incorporating features like captions
            for videos, transcripts for audio content, and clear design elements
            that work with screen readers and other assistive technologies.
          </p>
        </section>
        <section className="mt-4 ml-3">
          <img src={icon2} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Schedule learning</h5>
          <p className="lato-regular text-lg">
            E-learning breaks the mold of traditional class schedules. With
            on-demand content and self-paced learning, you can design a study
            plan that works for you. Fit in short bursts of learning throughout
            your day, dedicate focused blocks on weekends, or learn at your peak
            productivity hours – the choice is yours!
          </p>
        </section>
        <section className="mt-4 ml-3">
          <img src={icon3} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Record sessions</h5>
          <p className="lato-regular text-lg">
            E-learning platforms often offer the valuable ability to record
            sessions. This lets you capture lectures, demonstrations, or
            discussions for future reference. Review key points at your own
            pace, rewind confusing sections, or use recordings to create
            personal study guides.
          </p>
        </section>
        <section className="mt-4 ml-4">
          <img src={icon4} alt="" />
          <h5 className="roboto-medium text-2xl mt-2">Expert institutions</h5>
          <p className="lato-regular text-lg">
            E-learning isn't just about convenience; it grants access to
            world-renowned institutions and industry leaders. Top universities,
            prestigious organizations, and subject matter experts offer online
            courses, bringing their expertise directly to you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhyChoose;
