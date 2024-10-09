"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "blog",
        path: "/blog"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);



    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                <CiMenuFries className="text-[32px] " />
            </SheetTrigger>
            <SheetContent className="flex flex-col p-4 md:p-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <div className="mt-10 mb-8 text-center text-2xl">
                    {/* logo */}
                    <Link href="/">
                        <h1 className="text-2xl font-semibold">
                            WorkingWithAli
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-4">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-primary border-b-2 border-primary"
                                } text-xl capitalize hover:text-primary font-medium transition-all`}
                            onClick={() => setIsOpen(false)}  
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-2">
                        <Link href="/contact">
                            <Button className="text-xs">
                                Login
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="text-xs">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
