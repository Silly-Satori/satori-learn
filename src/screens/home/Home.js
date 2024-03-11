import "./styles/Home.css";
import Button from "../../components/containers/Button";
import Footer from "../../components/containers/Footer";
import Hovertext from "../../components/containers/Hovertext";

function Home() {
    return (
        <div>
            <div className="h-screen flex items-center justify-center mt-[-48px]">
                <div>
                    <h1 className="text-center text-6xl text-primary my-5 mx-2">
                        Lyte CDN
                    </h1>
                    <p className="text-center text-xl mx-2">
                        Serve static content to your sites, at the speed of
                        light.
                    </p>
                    <div className="flex justify-center m-2">
                        {" "}
                        {/* Center the button */}
                        <Button
                            text="Get started"
                            onClick={() => {
                                const aboutSection =
                                    document.getElementById("about");
                                if (aboutSection) {
                                    aboutSection.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            <section id="about">
                <div className="h-screen flex items-center justify-center">
                    <div className="outline px-12 py-10 rounded-xl outline-accent mx-3">
                        <h1 className="text-center text-6xl mb-10 text-primary">
                            About Us
                        </h1>
                        <p className="text-center text-xl">
                            Lyte CDN is a free, open-source CDN that allows you
                            to serve static content to your sites, at the speed
                            of light.
                        </p>
                        <br />
                        <div>
                            <div className="text-center text-xl">
                                We are:
                                <br />
                                <ul
                                    className="inline-flex space-x-5 list-disc list-inside font-semibold mt-3"
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Hovertext hoverText="Fast load times means better user retention">
                                        <li style={{ marginRight: "1rem" }}>
                                            Fast
                                        </li>
                                    </Hovertext>
                                    <Hovertext hoverText="Cheap means more money in your pocket">
                                        <li style={{ marginRight: "1rem" }}>
                                            Cheap
                                        </li>
                                    </Hovertext>
                                    <Hovertext hoverText="Easy to use means less time spent on setup">
                                        <li style={{ marginRight: "1rem" }}>
                                            Easy to use
                                        </li>
                                    </Hovertext>
                                    <Hovertext hoverText="Open-source means you know what's going on under the hood">
                                        <li style={{ marginRight: "1rem" }}>
                                            Open-source
                                        </li>
                                    </Hovertext>
                                    <Hovertext hoverText="Secure means your data is safe">
                                        <li>Secure</li>
                                    </Hovertext>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing">
                <div className="h-screen flex items-center justify-center">
                    <div className="outline px-12 py-10 rounded-xl outline-accent mx-3">
                        <h1 className="text-center text-6xl mb-10 text-primary">
                            Pricing
                        </h1>
                        <p className="text-center text-xl">
                            Lyte CDN plans start from as low as $2.99/month.
                            <br />
                            <br />
                            <span className="font-semibold">
                                We offer a 7-day money back guarantee. No
                                questions asked.
                            </span>
                        </p>
                        <div className="flex justify-center m-2">
                            <Button text="View plans" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;
