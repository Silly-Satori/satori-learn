import "./styles/Home.css";
import Button from "../../components/containers/Button";
import Footer from "../../components/containers/Footer";
import ToggleTheme from "../../components/containers/ToggleTheme";
import Hovertext from "../../components/containers/Hovertext";
function Home() {
  return (
    <div className="home">
      <div className="hero-div flex flex-col lg:flex-row items-center justify-between lg:px-[8%] lg:py-20 px-[5%] py-10">
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
      <div className="relative">{/* will prolly put a scroll bar here */}
      <hr className="border border-secondary  w-full absolute "/>

      <div className="homebtn flex justify-center relative z-20 items-center bottom-4 ">
      <button className="homebt ">WHO WE ARE</button>
      <button className="homebt ">WHAT ARE WE GIVING</button>
      <button className="homebt">OUR GOALS</button>
        </div>

      </div>
      <div className="main mx-28">
       
        {/* main content comes here*/}
        <div className="block1 flex justify-center items-center">
          <span>We are a team of dedicated professionals committed to empowering individuals like you to reach your full potential. Our instructors are experts in their fields, bringing years of experience and knowledge to each course they teach. From industry professionals to renowned academics, our instructors are passionate about sharing their expertise with you.
          </span>
          <img src="/assets/home/image.png"/>
        </div>
        <div className="block2 flex flex-row-reverse justify-center items-center">
          <span>we offer a wide range of courses covering diverse topics, including business, technology, arts, language, health, and much more. Whether you're a beginner or an expert, there's something for everyone here. Our courses are designed to be engaging, interactive, and practical, ensuring that you not only learn but also apply what you learn in real-world situations.</span>
          <img src="/assets/home/image.png"/>
        </div>
        <div className="block3 flex justify-center items-center">
          <div>Our goal is to provide We pride ourselves on providing high-quality education at an affordable price. With our user-friendly platform, you can learn at your own pace, on your own schedule. Plus, our responsive customer support team is always here to assist you every step of the way.</div>
          <img src="/assets/home/image.png"/>
        </div>
      </div>
      <ToggleTheme />
      <Footer />
    </div>
  );
}

export default Home;
