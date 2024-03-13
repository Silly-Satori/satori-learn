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
                        WE SELL <s className="font-normal brightness-75">
                            &nbsp;COURSES&nbsp;
                        </s>
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
            <ToggleTheme />
            <Footer />

        </div>
    );
}

export default Home;