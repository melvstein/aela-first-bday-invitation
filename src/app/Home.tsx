"use client"

import Image from "next/image";
import AelaFairy2 from "../../public/images/aela/aela_fairy2.png";
import AelaFairy3 from "../../public/images/aela/aela_fairy3.png";
import AelaFairyWithWings from "../../public/images/aela/aela_fairy_with_wings.png";
import Fairy1 from "../../public/images/fairy1.png";
import Fairy2 from "../../public/images/fairy2.png";
import Fairy3 from "../../public/images/fairy3.png";
import Fairy4 from "../../public/images/fairy4.png";
import Wings1 from "../../public/images/wings1.png";
import Wings2 from "../../public/images/wings2.png";
import Paper1 from "../../public/images/paper1.png";
import Paper2 from "../../public/images/paper2.png";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            <div className="container mx-auto md:p-8 p-4">
                <div>
                    <motion.div className="fixed md:bottom-[50px] md:right-[50px] bottom-[20px] right-[20px] z-10"
                        animate={{
                            y: ['-50px', '50px'], // Move up and down
                            x: ['-50px', '50px'], // Move slightly side to side
                            rotate: [0, 5, -5, 0], // Optional rotation effect
                        }}
                        transition={{
                            duration: 4, // Time for a full animation cycle
                            repeat: Infinity, // Keep repeating the animation
                            ease: 'easeInOut', // Smooth easing
                            repeatType: 'mirror', // Animate back and forth
                    }}>
                        <Image src={Fairy1} alt="fairy1" className="w-auto h-full md:max-w-[200px] max-w-[100px]" />
                    </motion.div>

                    <motion.div className="fixed md:top-[50px] md:right-[50px] top-[20px] right-[20px] z-10"
                        animate={{
                            y: ['-50px', '50px'], // Move up and down
                            x: ['-50px', '50px'], // Move slightly side to side
                            rotate: [0, 5, -5, 0], // Optional rotation effect
                        }}
                        transition={{
                            duration: 5, // Time for a full animation cycle
                            repeat: Infinity, // Keep repeating the animation
                            ease: 'easeInOut', // Smooth easing
                            repeatType: 'mirror', // Animate back and forth
                    }}>
                        <Image src={Fairy2} alt="fairy2" className="w-auto h-full md:max-w-[200px] max-w-[100px] -scale-x-100" />
                    </motion.div>

                    <motion.div className="fixed md:top-[50px] md:left-[50px] top-[20px] left-[20px] -z-10"
                        animate={{
                            y: ['-50px', '50px'], // Move up and down
                            x: ['-50px', '50px'], // Move slightly side to side
                            rotate: [0, 5, -5, 0], // Optional rotation effect
                        }}
                        transition={{
                            duration: 6, // Time for a full animation cycle
                            repeat: Infinity, // Keep repeating the animation
                            ease: 'easeInOut', // Smooth easing
                            repeatType: 'mirror', // Animate back and forth
                    }}>
                        <Image src={Fairy3} alt="fairy3" className="w-auto h-full md:max-w-[200px] max-w-[100px]" />
                    </motion.div>

                    <motion.div className="fixed md:bottom-[50px] md:left-[50px] bottom-[20px] left-[20px] -z-10"
                        animate={{
                            y: ['-20px', '20px'], // Move up and down
                            x: ['-50px', '50px'], // Move slightly side to side
                            rotate: [0, 5, -5, 0], // Optional rotation effect
                        }}
                        transition={{
                            duration: 5, // Time for a full animation cycle
                            repeat: Infinity, // Keep repeating the animation
                            ease: 'easeInOut', // Smooth easing
                            repeatType: 'mirror', // Animate back and forth
                    }}>
                        <Image src={Fairy4} alt="fairy4" className="w-auto h-full md:max-w-[200px] max-w-[100px]" />
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="flex items-center justify-center p-4">
                        <motion.div
                            animate={{
                                y: ['-20px', '20px'], // Move up and down
                            }}
                            transition={{
                                duration: 1, // Time for a full animation cycle
                                repeat: Infinity, // Keep repeating the animation
                                ease: 'easeInOut', // Smooth easing
                                repeatType: 'mirror', // Animate back and forth
                        }}>
                            <Image src={AelaFairyWithWings} alt="aela fairy" className="w-auto h-full md:max-w-[500px]" />
                        </motion.div>
                        {/* <motion.div className="absolute top-0 -z-10"
                            animate={{
                                y: ['-20px', '20px'], // Move up and down
                            }}
                            transition={{
                                duration: 1, // Time for a full animation cycle
                                repeat: Infinity, // Keep repeating the animation
                                ease: 'easeInOut', // Smooth easing
                                repeatType: 'mirror', // Animate back and forth
                        }}>
                            <Image src={Wings1} alt="wings1" className="w-auto h-full md:max-w-[600px]" />
                        </motion.div> */}
                    </div>
                    <div className="md:py-16 md:px-20 p-8 relative flex items-center justify-center">
                        <div>
                            <Image src={Paper2} alt="paper" className="absolute w-full h-auto min-h-[500px] max-h-[600px] top-0 bottom-0 left-0 right-0 -z-10" />
                        </div>
                        <div className="flex flex-col items-center justify-between md:space-y-8 space-y-4 uppercase md:text-2xl text-xl text-center">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="md:text-4xl text-2xl flex items-center justify-center">
                                    {"Calling all Fairies"}
                                </p>
                                <p className="flex items-center justify-center">
                                    {"Please join us to celebrate"}
                                </p>
                            </div>
                            <div className="md:text-5xl text-3xl font-bold flex items-center justify-center">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString("Aela Melodie's")
                                        .pauseFor(1000)
                                        .start();
                                    }}

                                    options={{
                                        autoStart: true,
                                        loop: false,
                                    }}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="flex items-center justify-center">
                                    {"Christening and Fairy 1st Birthday"}
                                </p>
                                <p className="flex items-center justify-center">
                                    {"On November 30, 2024, Saturday"}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="text-center flex items-center justify-center">
                                    {'"I prayed for this child, and the Lord has granted me what I asked of him."'}
                                </p>
                                <p className="flex items-center justify-center">
                                    {"-Samuel 1:27"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}