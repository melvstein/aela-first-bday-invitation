"use client"
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import type { IconType } from "react-icons";
import { FaHouse } from "react-icons/fa6";
/* import { FaUsersLine } from "react-icons/fa6"; */
import { FaCalendarDays } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useState } from "react";
import { RiMenuFold3Fill as CloseMenu } from "react-icons/ri";
import { RiMenuUnfold4Fill as OpenMenu } from "react-icons/ri";
import { div } from "framer-motion/client";
import { motion } from "framer-motion";

const navs = [
    {
        "id": 1,
        "name": "Home",
        "href": "/",
        "isActive": true,
    },
    {
        "id": 2,
        "name": "Events",
        "href": "#events",
        "isActive": false,
    },
    {
        "id": 3,
        "name": "RSVP",
        "href": "#rsvp",
        "isActive": false,
    }
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className={clsx(isOpen ? "w-full top-0 left-0 rounded-none" : "top-2 left-2 rounded-3xl","sm:hidden block fixed z-30 bg-red-200")} onClick={toggle}>
                <button className="p-2 cursor-pointer">
                    { isOpen ? <OpenMenu className="size-[40px] text-green-200" /> : <CloseMenu className="size-[40px] text-green-200" /> }
                </button>
                <div className={clsx(isOpen ? "block" : "hidden", "sm:hidden block w-full bg-green-200 transition-all duration-300 ease-in-out")} onMouseLeave={() => setIsOpen(false)}>
                    {
                        navs.map(nav => {
                            let icon: IconType = FaHouse;

                            switch (nav.name) {
                                case "Home":
                                    icon = FaHouse;
                                    break;
                                case "Events":
                                    icon = FaCalendarDays;
                                    break;
                                case "RSVP":
                                    icon = SlEnvolopeLetter;
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <Link href={nav.href} key={nav.id} className={clsx("flex items-center justify-start p-4 space-x-2")}>
                                    {React.createElement(icon)} <p className={clsx(isOpen ? 'flex' : 'hidden')}>{nav.name}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </nav>

            <nav className="fixed top-0 bottom-0 left-0 flex items-center justify-center z-30 text-slate-800">
                <div className="border-slate-800 border-r-2 border-t-2 border-b-2 rounded-tr-lg rounded-br-lg sm:block hidden">
                    {
                        navs.map(nav => {
                            let icon: IconType = FaHouse;

                            switch (nav.name) {
                                case "Home":
                                    icon = FaHouse;
                                    break;
                                case "Events":
                                    icon = FaCalendarDays;
                                    break;
                                case "RSVP":
                                    icon = SlEnvolopeLetter;
                                    break;
                                default:
                                    break;
                            }
                            return (
                                <div key={nav.id} className="" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                    <Link href={nav.href} className={clsx("flex items-center justify-center py-4 px-2 space-x-2")}>
                                        {React.createElement(icon)} <p className={clsx(isOpen ? 'flex' : 'hidden')}>{nav.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
        </div>
    );
};