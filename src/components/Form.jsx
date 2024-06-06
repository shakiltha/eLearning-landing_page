import { useState } from "react";

const Form = () => {
  const [focused, setFocused] = useState(false);
  const style = {
    boxShadow: focused ? "0 0 8px rgba(0, 0, 0, 0.5" : "none",
  };
  const setToFocused = () => setFocused(true);
  const setToUnfocused = () => setFocused(false);
  return (
    <div
      className="lg:w-[436px] lg:h-[546px] bg-white p-3 mt-[5rem] border-2 mx-2"
      style={style}
    >
      <h4 className="roboto-bold text-2xl md:text-3xl">Become a Member</h4>
      <p className="roboto-regular text-lg">
        Get instant Access to 4500 Courses
      </p>
      <input
        type="text"
        placeholder="Full name"
        className="pl-2 w-80 h-8 my-2 border"
        onFocus={setToFocused}
        onBlur={setToUnfocused}
      />
      <input
        type="email"
        placeholder="Email address"
        className="pl-2 w-80 h-8 mb-2 border"
        onFocus={setToFocused}
        onBlur={setToUnfocused}
      />
      <select
        name="programs"
        id="programs"
        className="pl-2 w-80 h-8 mb-2 border"
        onFocus={setToFocused}
        onBlur={setToUnfocused}
      >
        <option value="frontend">Frontend</option>
        <option value="backed">Backend</option>
        <option value="machine learning">Machine Learning</option>
        <option value="game development">Game Development</option>
      </select>

      <textarea
        placeholder="Detail Information"
        className="pl-2 border w-80 h-80"
        onFocus={setToFocused}
        onBlur={setToUnfocused}
      ></textarea>
    </div>
  );
};

export default Form;
