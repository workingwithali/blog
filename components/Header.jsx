import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ThemeBtn";

const Header = () => {
    return (
        <header className="bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <div className="contaniner mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-lg font-bold">
                        WorkingWithAli
                    </h1>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden xl:flex items-center gap-2">
                    <Nav />
                    <Link href="/contact">
                        <Button variant="outline">
                            Login
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline">
                            Signup
                        </Button>
                    </Link>
                    <ModeToggle />
                </div>
                {/* Mobile navigation */}
                <div className="flex xl:hidden">
                    <div className="mx-2">
                    <ModeToggle />
                    </div>
                    <MobileNav />
                </div>
            </div>

        </header>
    );
};

export default Header;
