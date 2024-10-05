"use client";
import { useState, useEffect } from "react";
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

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Close the sheet when the pathname changes
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
                <CiMenuFries className="text-[32px] text-[hsl(var(--accent))]" />
            </SheetTrigger>
            <SheetContent className="flex flex-col p-4 md:p-8 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <div className="mt-10 mb-8 text-center text-2xl">
                    {/* logo */}
                    <Link href="/">
                        <h1 className="text-2xl font-semibold text-[hsl(var(--primary))]">
                            WorkingWithAli <span className="text-[hsl(var(--accent))]">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-6">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname && "text-[hsl(var(--accent))] border-b-2 border-[hsl(var(--accent))]"
                                } text-xl capitalize hover:text-[hsl(var(--accent))] font-medium transition-all`}
                            onClick={() => setIsOpen(false)}  // Close sheet after selecting a link
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button className="text-sm xl:text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                            Login
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="text-sm xl:text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                            Sign up
                        </Button>
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
