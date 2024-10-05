'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const Nav = () => {
    const pathname = usePathname(); // Move this inside the Nav component
    return (
        <nav className="flex flex-wrap gap-4 md:gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : "hover:text-accent"} capitalize font-medium transition-all`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;