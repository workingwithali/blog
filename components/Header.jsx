import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-6 px-4 xl:py-8 bg-[hsl(var(--background))]/50 text-[hsl(var(--foreground))] sticky top-0 backdrop-blur z-50">
            <div className="container mx-auto flex justify-between items-center border-b border-[hsl(var(--border))]">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl xl:text-4xl font-semibold text-[hsl(var(--primary))]">
                        WorkingWithAli
                    </h1>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
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
                </div>

                {/* Mobile navigation */}
                <div className="flex xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
