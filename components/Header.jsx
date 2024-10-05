import Link from "next/link"
import { Button } from "./ui/button"
// components
import Nav from "./Nav"
import MobileNav from "./MobileNav"
const Header = () => {
    return (
        <header className="py-8 px-2 xl:py-12 bg-background/50 sticky top-0 backdrop-blur ">
            <div className="container mx-auto flex justify-between border-b items-center">
                {/* logo */}
                <Link href='/'>
                    <h1 className="text-2xl xl:text-4xl font-semibold">
                        WorkingWithAli
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Login</Button>
                    </Link>
                    <Link href="/contact">
                        <Button>Sinup</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header