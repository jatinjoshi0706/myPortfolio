import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk5 from "../assets/sk-5.png";
import sk12 from "../assets/sk-12.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import sk13 from "../assets/sk-13.png";
import sk14 from "../assets/sk-14.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk12} />
                    <SkillIcon path={sk13} />
                    <SkillIcon path={sk14} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk11} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                    <Service
                                num="1"
                                title="Frontend Development"
                                desc="As a frontend developer, I specialize in React and Next.js for building dynamic and responsive web applications. My design approach integrates Bootstrap for sleek components and Tailwind CSS for flexible and modern styles. With a focus on user experience and the latest trends, I create engaging interfaces that showcase my expertise in frontend development."
                                data={[
                                    // "Prototype",
                                    // "Wireframe",
                                    // "User Experience",
                                    // "Prototype",
                                    "React",
                                    "Next",
                                    "BootStrap",
                                    "TailWind",

                                ]}
                            />
                        <Service
                            num="2"
                            title="Backend Development"
                            desc="As a backend developer, I excel in Flask and Django, creating efficient and scalable solutions. Proficient in database management, I ensure seamless data handling for robust web applications."
                            data={[
                                "Flask",
                                "DataBase",
                                "Django",
                            ]}
                            
                        />
                        <Service
                            num="3"
                            title="Wordpress Development"
                            desc="As a WordPress developer, I specialize in crafting custom plugins and wireframes to optimize user experience. My expertise ensures seamless integrations and intuitive interfaces for websites."
                            data={[
                                "Plugin",
                                "Wireframe",
                                "User Experience",                                
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}
                    {/* A Showcase  Skills Expertise */}
                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Showcase</span>
                        <span>of My </span>
                        <span className="flex items-center gap-2">
                        Skills  
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                        and
                        {" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                        Expertise
                        {/* {" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            /> */}
                        </span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
