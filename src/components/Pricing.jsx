const Pricing = () => {
  return (
    <div>
      <section>
        <section className="flex justify-center">
          <h3 className="roboto-bold text-2xl md:text-4xl pl-2 border-l-2 border-l-[#024547] text-center">
            Pricing
          </h3>
        </section>
        <p className="leto-regular text-lg text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet
        </p>
      </section>
      <section className="md:flex">
        <section className="border w-[311px] h-[380px] mx-auto shadow-2xl p-7 my-3 rounded-lg">
          <div className="flex justify-between">
            <span className="lato-regular">Advanced</span>
            <span className="lato-regular text-sm text-white bg-[#FF9F1C] rounded-xl p-1">
              Popular
            </span>
          </div>
          <div className="mt-5">
            <span className="roboto-bold text-2xl md:text-3xl">$19.99</span>
            <span className="roboto-regular ml-10">Per month</span>
          </div>
          <section>
            <section className="mt-2">
              {/* check mark symbol - html code */}
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">All Features</span>
            </section>
          </section>
          <section>
            <section className="mt-2">
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">All Courses</span>
            </section>
          </section>
          <section>
            <section className="mt-2">
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">
                Unlimited Cloud Storage
              </span>
            </section>
          </section>
          <section>
            <section className="mt-2">
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">
                Flexible Expert Sessions
              </span>
            </section>
          </section>
          <button className="w-60 h-14 bg-[#CC9D42] text-white rounded-xl mt-10 roboto-regular">
            Buy now
          </button>
        </section>

        <section className="border w-[311px] h-[380px] mx-auto shadow-2xl p-7 my-3 rounded-lg">
          <div className="flex justify-between">
            <span className="lato-regular">Basic</span>
          </div>
          <div className="mt-5">
            <span className="roboto-bold text-2xl md:text-3xl">$9.99</span>
            <span className="roboto-regular ml-10">Per month</span>
          </div>
          <section>
            <section className="mt-2">
              {/* check mark symbol - html code */}
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">Limited features</span>
            </section>
          </section>
          <section>
            <section className="mt-2">
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">Limited Courses</span>
            </section>
          </section>
          <section>
            <section className="mt-2">
              <span className="text-lg mr-4">&#10003;</span>
              <span className="lato-regular text-lg">
                Limited Cloud Storage
              </span>
            </section>
          </section>
          <button className="w-60 h-14 bg-[#CC9D42] text-white rounded-xl mt-10 roboto-regular">
            Buy now
          </button>
        </section>
      </section>
    </div>
  );
};

export default Pricing;
