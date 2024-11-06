"use client"

import Image from "next/image";
import AelaRabbit1 from "../../public/images/aela/aela_rabbit1.png";
import AelaRabbit3 from "../../public/images/aela/aela_rabbit3.png";
import Church from "../../public/images/church.png";
import { motion } from "framer-motion";

export default function Events() {
    return (
        <div className="container mx-auto min-h-screen relative" id="events">
            <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen">
                <div className="relative p-16">
                    <div className="z-10 space-y-4 font-semibold">
                        <p className="text-2xl">
                            Church: Diocesan Shrine and Parish of our lady of the abandoned, Muntinlupa City
                        </p>
                        <p className="text-2xl">
                            Date: November 30, 2024, Saturday
                        </p>
                        <p className="text-2xl">
                            Time: 10:30 am
                        </p>
                    </div>
                    <div className="">
                        <motion.div className="absolute bottom-0 left-0 z-10" initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Image src={AelaRabbit3} alt="aela rabbit" className="w-full h-auto max-w-[500px] -scale-x-100" />
                        </motion.div>
                        <Image src={Church} alt="aela rabbit" className="absolute size-[250px] bottom-[10px] left-[220px] z-10" />
                    </div>
                </div>
                <div className="relative bg-red-100">
                    <motion.div className=" bottom-0 right-0" initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Image src={AelaRabbit1} alt="aela rabbit" className="w-[200px] -scale-x-100"/>
                    </motion.div>
                </div>
            </div>
            {/* <iframe
                className="h-[300px] w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094395!2d144.95373531550485!3d-37.81627997975102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2zMzcnMzgnMjQuNiJOIDE0NMKwNTAnMjQuNSJF!5e0!3m2!1sen!2sau!4v1631938340123!5m2!1sen!2sau" // Replace with your actual Google Maps embed link
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>  */}
        </div>
    );
}