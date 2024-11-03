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
        "href": "#events",
        "isActive": false,
    }
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 bottom-0 left-0 flex items-center justify-center">
            <div className="border-red-500 border-r border-t border-b rounded-tr round-br">
                {
                    navs.map(nav => {
                        return (
                            <div key={nav.id} className="">
                                <Link href={nav.href} className={clsx("flex items-center justify-center p-4", pathname == nav.href && "text-red-500")}>
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