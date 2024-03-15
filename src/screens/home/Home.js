import "./styles/Home.css";
import { useRef } from "react";
import Button from "../../components/containers/Button";
import Footer from "../../components/containers/Footer";
import ToggleTheme from "../../components/containers/ToggleTheme";
import Hovertext from "../../components/containers/Hovertext";
function Home() {
  const scroll1 = useRef(null);
  const scroll2 = useRef(null);
  const scroll3 = useRef(null);

  function getTopPosition(element) {
    let topPosition = 0;
    while (element) {
      topPosition += element.offsetTop;
      element = element.offsetParent;
    }
    return topPosition;
  }

  return (
    <div className="home">
      <div className="hero-div flex flex-col lg:flex-row items-center justify-between lg:px-[8%] lg:py-20 px-[5%] py-10 text-center md:text-start">
        <div className="hero-text text-3xl md:text-5xl font-bold lg:w-1/2 lg:pb-0 pb-10">
          <h1 className="md:whitespace-nowrap">
            {/* Strikethrough courses */}
            WE SELL{" "}
            <s className="font-normal brightness-75">&nbsp;COURSES&nbsp;</s>
          </h1>
          {/* Add gradient color to this text */}
          <h1 class="bg-gradient-to-r from-primary from-[5%] via-accent via-[30%] to-secondary inline-block text-transparent bg-clip-text to-[90%] md:whitespace-nowrap">
            DREAMS AND SKILLS
          </h1>
        </div>
        <img
          src="/assets/home/hero.svg"
          alt="hero"
          className="hero-img h-[40vh] lg:w-1/2 lg:h-auto w-full object-contain lg:translate-x-10"
        />
      </div>

      {/** home page main comes here */}
      <div className="relative mt-4">{/* will prolly put a scroll bar here */}
        <hr className="border border-secondary  w-full relative hidden sm:flex" />

        <div className="homebtn flex justify-center relative z-20 bottom-4 whitespace-nowrap overflow-x-auto items-center flex-col sm:flex-row gap-3 sm:gap-0">
          <button className="homebt" onClick={() => {
            window.scrollTo({ top: getTopPosition(scroll1.current) - 100, behavior: "smooth" })
          }}>WHO WE ARE</button>
          <button className="homebt" onClick={() => {
            window.scrollTo({ top: getTopPosition(scroll2.current) - 100, behavior: "smooth" })
          }}>WHAT ARE WE GIVING</button>
          <button className="homebt" onClick={() => {
            window.scrollTo({ top: getTopPosition(scroll3.current) - 50, behavior: "smooth" })
          }}>OUR GOALS</button>
        </div>

      </div>
      <div className="main mx-12 sm:mx-20 md:mx-36 mt-4">

        {/* main content comes here*/}
        <div className="block1 flex justify-center items-center my-4" id="section" ref={scroll1}>
          <div className="flex flex-col lg:flex-row">
            <span>We are a team of dedicated professionals committed to empowering individuals like you to reach your full potential. Our instructors are experts in their fields, bringing years of experience and knowledge to each course they teach. From industry professionals to renowned academics, our instructors are passionate about sharing their expertise with you.
            </span>
            <img src="/assets/home/image.png" className="max-h-[450px] object-contain" />
          </div>
        </div>
        <div className="block2 flex flex-row-reverse justify-center items-center" id="section" ref={scroll2}>
          <div className="flex flex-col lg:flex-row">
            <span>we offer a wide range of courses covering diverse topics, including business, technology, arts, language, health, and much more. Whether you're a beginner or an expert, there's something for everyone here. Our courses are designed to be engaging, interactive, and practical, ensuring that you not only learn but also apply what you learn in real-world situations.</span>
            <img src="/assets/home/image.png" className="max-h-[450px] object-contain" />
          </div>
        </div>
        <div className="block3 flex justify-center items-center" id="section" ref={scroll3}>
          <div className="flex flex-col lg:flex-row">
            <div>Our goal is to provide We pride ourselves on providing high-quality education at an affordable price. With our user-friendly platform, you can learn at your own pace, on your own schedule. Plus, our responsive customer support team is always here to assist you every step of the way.</div>
            <img src="/assets/home/image.png" className="max-h-[450px] object-contain" />
          </div>
        </div>
      </div>
      <ToggleTheme />
      <Footer />
    </div>
  );
}

export default Home;
