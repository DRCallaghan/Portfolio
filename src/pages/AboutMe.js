import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const Home = () => {
    const styles = {
        cardImage: {
            position: 'absolute',
            height: '64px',
            width: '196px',
            zIndex: '1',
            paddingLeft: '84.25px',
            marginTop: "112px",
            borderBottomRightRadius: '90px',
        },
        dividerStyle: {
            backgroundColor: '#14397d',
        }
    };

    return (
        <main>
            <Header />
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3"></div>
            </div>
            <div className="summary">
                <div className="col-12 col-md-8 my-3">
                    <h1>Hello, I'm Dennis.</h1>
                    <p>
                        I'm a budding web developer just beginning my career. <br></br>
                        My passion to create powerful tools for the game osu!, and for its tournament scene in particular, has
                        led me through the fields of public speaking, graphic design, spreadsheeting, and now web development
                        and app design. <br></br>
                        I believe that all passionate communities deserve the tools they need to develop their hobbies as they
                        see fit, and those tools can often be easily extended to the business sector. <br></br>
                        Check out my recent work and resume above, or contact me if you're interested in my work.
                    </p>
                </div>
            </div>
            {/* <Footer /> */}
        </main>
    );
};

export default Home;