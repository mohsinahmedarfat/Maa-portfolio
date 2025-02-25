import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/mohsinAhmedArfat.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-full lg:w-[90%]" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        {/* MODIFY: remove py-28 and move the text vertically center */}
          <div className="flex justify-center py-28 lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
