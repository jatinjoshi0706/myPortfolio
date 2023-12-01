import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/react.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] pb-5 md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative ">
                    <span>🚀 About Me </span>
                    {/* <span className="flex items-center gap-2"> */}
                        {/* <span>Designer</span> */}
                         
                            {/*
                        <span>In India</span> */}
                    {/* </span> */}
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                {/* 🚀 About Me<br/> */}

Greetings! I'm Jatin Joshi, a passionate frontend developer on a journey fueled by code and creativity. With a degree of Batchlors in Computer Science Specialization in AIML , my educational voyage laid the foundation for transforming digital landscapes.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    🛠️ Craftsmanship<br/>

Fluent in React.js and Framer, I wield these tools to sculpt immersive web experiences. My coding canvas is adorned with projects that breathe innovation and functionality, each a testament to the fusion of design and skill.
                </Div>
                {/* PARAGRAPH END */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                🏆 Journey Highlights<br/>

My journey is punctuated by the creation of over five dynamic websites. Noteworthy among them are a school's virtual presence, a dance academy's digital stage, an online content coaching hub, and a corporate portfolio that captures the essence of businesses in pixels.
                </Div>

                {/* PARAGRAPH START */}
                
                {/* PARAGRAPH END */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                💡 Passions & Perspective<br/>

Beyond the screen, I'm driven by a curiosity that transcends pixels. My approach? Merge design thinking with strategic coding for solutions that resonate. Let's embark on a shared vision where technology meets creativity, leaving an indelible mark.
                </Div>
            </Wrapper>
        </div>
    );
};

export default AboutMe;








