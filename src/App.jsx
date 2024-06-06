import "./App.css";
import background from "./assets/Background.png";
import AvailableCourses from "./components/AvailableCourses";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import StudentTrust from "./components/StudentTrust";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <div>
        <img src={background} alt="" className="mx-auto" />
        <h4 className="absolute top-0 left-3 mt-4">
          <span className="w-10 h-10 p-2 bg-[#024547] rounded-md text-white">
            e
          </span>
          <span className="ml-1">Learn</span>
        </h4>
        <Hero />
        <Form />
        <StudentTrust />
        <WhyChoose />
        <AvailableCourses />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
