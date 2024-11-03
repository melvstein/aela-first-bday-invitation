"use client"

import Image from "next/image";
import AelaFairy2 from "../../public/images/aela/aela_fairy2.png"
import AelaFairy3 from "../../public/images/aela/aela_fairy3.png"
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className="bg-white container mx-auto min-h-screen mt-8">
            <div className="grid grid-cols-2 bg-[#a8b8ad]">
                <motion.div className="flex items-center justify-center" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <Image src={AelaFairy2} alt="aela fairy" className="w-full h-auto max-w-[500px] p-4" />
                </motion.div>
                <div className="flex flex-col items-start justify-start p-16 space-y-8">
{/* <Typewriter
  options={{
    strings: ['Hi', "I'm Aela Melodie O. Bayogo."],
    delay: 75,
    autoStart: true,
  }}
/> */}
                    <div className="text-4xl font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Hi, I'm Aela Melodie O. Bayogo")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm turning 1 year old on Dec 1, 2024")
                                .pauseFor(1000)
                                .start();
                            }}

                            options={{
                                autoStart: true,
                                loop: true,
                              }}
                        />
                    </div>

                    <p className="text-2xl">
                        {"I'm Inviting you on my fairy first special birthday. Check below details for the date and event place"}
                    </p>
                </div>
            </div>
            <motion.div className="flex flex-col items-center justify-center p-8 bg-white"initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
                <Image src={AelaFairy3} alt="aela fairy" className="w-[300px]"/>
            </motion.div>
        </div>
    );
}