"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from 'next/navigation'

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
        "href": "/events",
        "isActive": false,
    }
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={clsx("flex items-center justify-start")}>
            {
                navs.map(nav => {
                    return (
                        <div key={nav.id} className="">
                            <Link href={nav.href} className={clsx("flex items-center justify-center p-4", pathname == nav.href && "bg-red-500")}>
                                {nav.name}
                            </Link>
                        </div>
                    )
                })
            }
        </nav>
    );
};