"use client"
import clsx from "clsx";
import Link from "next/link";

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
    }
];

export default function Sidebar() {
    return (
        <nav className="fixed top-0 bottom-0 left-0 flex items-center justify-center z-10 text-slate-950">
            <div className="border-slate-400 border-r-2 border-t-2 border-b-2 rounded-tr-lg rounded-br-lg">
                {
                    navs.map(nav => {
                        return (
                            <div key={nav.id} className="">
                                <Link href={nav.href} className={clsx("flex items-center justify-center py-4 px-2")}>
                                    {nav.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    );
};