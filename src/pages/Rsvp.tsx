"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import AelaFairyWithWings2 from "../../public/images/aela/aela_fairy_with_wings2.png";
/* import AelaFairyWithWings3 from "../../public/images/aela/aela_fairy_with_wings3.png";
import AelaRabbit2 from "../../public/images/aela/aela_rabbit2.png";
import AelaButterfly2 from "../../public/images/aela/aela_butterfly2.png"; */
import MjImage from "../../public/images/mj/mj1.jpg";
import JmImage from "../../public/images/jm/jm.png";
import ForestBg from "../../public/images/forest7.jpg"
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

export default function Rsvp() {
    return (
        <section id="rsvp" className="container mx-auto min-h-screen flex items-center justify-center py-4">
            <div className="grid xl:grid-cols-2 grid-cols-1 bg-slate-200 md:rounded-3xl">
                <div className="w-full h-full flex flex-col items-center justify-center md:p-10 bg-slate-100 space-y-4 md:rounded-3xl shadow-2xl">
                    <div className="w-full text-center space-y-4 p-10">
                        <h2 className="text-5xl">Dress Code</h2>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="size-[50px] bg-red-200 rounded-full"></div>
                            <div className="size-[50px] bg-green-200 rounded-full"></div>
                            <div className="size-[50px] bg-blue-200 rounded-full"></div>
                            <div className="size-[50px] bg-indigo-200 rounded-full"></div>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <Image src={ForestBg} alt="forestbg" className="w-full h-auto md:rounded-full bottom-0" />
                    </div>
                    {/* <div className="w-full">
                        <motion.div className="absolute bottom-[150px] left-[400px]">
                                <Image src={AelaFairyWithWings3} alt="aela fairy" className="w-[80px]"/>
                        </motion.div>
                        <motion.div className="absolute bottom-[60px] left-[290px]">
                        </motion.div>
                        <motion.div className="absolute bottom-[40px] left-[260px] z-10">
                            <Image src={AelaFairyWithWings2} alt="aela fairy" className="w-[150px]"/>
                        </motion.div>
                        <motion.div className="absolute bottom-[10px] left-[290px]">
                        </motion.div>
                    </div>
                    <div className="w-full">
                        <motion.div className="absolute bottom-[20px] right-[100px] z-10">
                            <Image src={AelaRabbit2} alt="aela_rabbit2" className="w-[150px]"/>
                        </motion.div>
                    </div>
                    <div className="w-full">
                        <motion.div className="absolute bottom-[50px] left-[100px] z-10">
                            <Image src={AelaButterfly2} alt="aela_butterly2" className="w-[150px]"/>
                        </motion.div>
                    </div> */}
                </div>
                <div className="relative flex flex-col items-center justify-start text-xl md:p-20 p-10 space-y-8">
                    <h2 className="md:text-8xl sm:text-6xl text-5xl text-center">Save the Date!</h2>
                    <p className="md:text-5xl sm:text-4xl text-2xl">
                        {"See you on my special day."}
                    </p>

                    <motion.div className="bottom-[-20px] right-0">
                        <Image src={AelaFairyWithWings2} alt="aela fairy" className="w-[150px]"/>
                    </motion.div>

                    <div className="w-full text-center space-y-4 z-10">
                        <p className="text-2xl">Please RSVP to daddy Melvin and mommy Jendie</p>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <Link href={"https://www.facebook.com/melvinbayogo"} target="_blank" className="flex sm:flex-row flex-col items-center justify-center gap-4">
                                <Image src={MjImage} alt="mj image" className="size-[50px] rounded-full -scale-x-100" />
                                <p className="flex items-center justify-between"><FaFacebookF /> {"https://www.facebook.com/melvinbayogo"}</p>
                            </Link>
                            <Link href={"https://www.facebook.com/JendieOcampo"} target="_blank" className="flex sm:flex-row flex-col items-center justify-center gap-4">
                                <Image src={JmImage} alt="jm image" className="size-[50px] rounded-full" />
                                <p className="flex items-center justify-between"><FaFacebookF /> {"https://www.facebook.com/JendieOcampo"}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}