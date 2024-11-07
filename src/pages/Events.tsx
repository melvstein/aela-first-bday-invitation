"use client"

import Image from "next/image";
import AelaRabbit1 from "../../public/images/aela/aela_rabbit1.png";
/* import AelaRabbit3 from "../../public/images/aela/aela_rabbit3.png";
import Church from "../../public/images/church.png"; */
import { motion } from "framer-motion";

export default function Events() {
    return (
        <section id="events" className="container mx-auto min-h-screen relative flex items-center justify-center py-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 min-h-[800px] bg-red-100 md:rounded-3xl">
                <div className="relative sm:p-10 p-4 bg-red-50 space-y-8 md:rounded-3xl shadow-2xl">
                    <h1 className="flex items-center justify-center text-center text-3xl">
                        {"November 30, 2024, Saturday"}
                    </h1>
                    <div className="flex flex-col items-start justify-center space-y-8 text-xl relative">
                        <div className="space-y-4 font-semibold text-xl z-20">
                            <p className="text-3xl">{"Christening"}</p>
                            <p>
                                <span className="text-2xl">Church:</span> {"Diocesan Shrine and Parish of Our Lady of the Abandoned, Muntinlupa City"}
                            </p>
                            {/* <p>
                                <span className="text-2xl">Date:</span> {"November 30, 2024, Saturday"}
                            </p> */}
                            <p>
                            <span className="text-2xl">Time:</span> {"10:30 AM - 12:00 PM"}
                            </p>
                        </div>
                        
                        
                        <div className="w-full h-full">
                            <iframe
                                className="h-full w-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4595.866123412621!2d121.04169568332522!3d14.389804133614833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0f7524200ab%3A0x265667e134b61062!2sDiocesan%20Shrine%20and%20Parish%20of%20Our%20Lady%20of%20the%20Abandoned%20(Diocese%20of%20Para%C3%B1aque)!5e0!3m2!1sen!2sph!4v1730902588199!5m2!1sen!2sph" // Replace with your actual Google Maps embed link
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                            {/* <motion.div className="absolute bottom-0 right-0 z-10" initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                                <Image src={AelaRabbit3} alt="aela rabbit" className="w-full h-auto md:max-w-[300px] max-w-[200px]" />
                            </motion.div>
                            <Image src={Church} alt="church" className="absolute md:size-[150px] md:bottom-[10px] md:right-[120px] size-[90px] bottom-[5px] right-[90px] z-10" /> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center space-y-8 text-xl">
                        <div className="z-10 space-y-4 font-semibold">
                            <p className="text-3xl">{"Birthday Event Place"}</p>
                            <p>
                                <span className="text-2xl">Venue:</span> {"2nd Floor, JRF Multi-Purpose Hall Katarungan Village, Muntinlupa City"}
                                {/* {"Blk 7 Lot 5 Jose Abad Santos, Katarungan Village, Poblacion, Muntinlupa City"} */}
                            </p>
                            {/* <p>
                                <span className="text-2xl">Date:</span> {"November 30, 2024, Saturday"}
                            </p> */}
                            <p>
                                <span className="text-2xl">Time:</span> {"11:30 AM - 5:00 PM"}
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <iframe
                                className="h-full w-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30917.607895524554!2d121.01230170975617!3d14.386704308763914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d110363d2449%3A0xc4498dc4ffa2b272!2sJRF%20Multi-Purpose%20Hall%20Katarungan%20Village!5e0!3m2!1sen!2sph!4v1730902484507!5m2!1sen!2sph" // Replace with your actual Google Maps embed link
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="relative p-10 flex flex-col items-center justify-start text-xl space-y-10">
                    <h1 className="text-4xl">
                        {"God Parents"}
                    </h1>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 min-w-full z-10">
                        <div className="flex flex-col items-center justify-start space-y-2 text-center">
                            <h3 className="text-4xl">
                                {"God Father"}
                            </h3>
                            <p>{"Luke Acevedo"}</p>
                            <p>{"Christian Bana"}</p>
                            <p>{"Kenneth Pascual"}</p>
                            <p>{"John Bautista"}</p>
                            <p>{"Michael Roy Bulawan"}</p>
                            <p>{"Darwin Saliganan"}</p>
                            <p>{"Erickson Bayogo"}</p>
                            <p>{"Raylord Munar"}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start space-y-2 text-center">
                            <h3 className="text-4xl">
                                {"God Mother"}
                            </h3>
                            <p>{"Mikka Bayogo"}</p>
                            <p>{"Lovhe Bayogo Miniao"}</p>
                            <p>{"Jezreel Joy Ocampo"}</p>
                            <p>{"Shiela Mercado"}</p>
                            <p>{"Louise Nadine Domingo"}</p>
                            <p>{"Edgiezel Trozado"}</p>
                            <p>{"Richelle Ramiro"}</p>
                            <p>{"Camille Rivera"}</p>
                            <p>{"Kaye Ocon"}</p>
                            <p>{"Larralyn Nolledo"}</p>
                            <p>{"Maria Leofel Anne Pagtama"}</p>
                            <p>{"Lyra Padua"}</p>
                            <p>{"Princess Victoria"}</p>
                        </div>
                    </div>
                    <motion.div className="absolute bottom-5 left-5" initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Image src={AelaRabbit1} alt="aela rabbit" className="w-[200px]"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}