"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import AelaFairy3 from "../../public/images/aela/aela_fairy3.png";
import Wings1 from "../../public/images/wings1.png";

export default function FairyLand() {
    return (
        <div className="min-h-screen container mx-auto">
            <div className="grid grid-cols-2">
                <div>
                    
                </div>
                <div className="p-8">
                    <div className="bg-[url('/images/forest6.jpg')] bg-cover bg-center bg-no-repeat relative text-white rounded-3xl min-h-[700px]">
                        <motion.div className="flex flex-col items-center justify-center p-8">
                            <Image src={AelaFairy3} alt="aela fairy" className="absolute w-[200px] items-center bottom-[50px] z-10"/>
                            <Image src={Wings1} alt="wings2" className="absolute w-[200px] bottom-0" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}