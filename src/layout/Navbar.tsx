import { Image } from "@nextui-org/image";
import {  
    Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
// import {TuuperCove} from "@/components/png/TuuperCove"

export default function NavbarRoot() {
    return (
        <Navbar>
            <NavbarBrand>
                {/* <TuuperCove /> */}
                <Link href="/" aria-current="page">
                    <Image src="/logo.png" width={32} height={32} alt="TuuperCove in Secret" />
                </Link>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4"  justify="center">
                <NavbarItem isActive>
                    <Link href="/" aria-current="page">
                        <i className="fa-solid fa-house"></i>
                         
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/lead">
                        <i class="fa-solid fa-chess-board"></i>
                         
                        Leaderboard
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/talent">
                        Vtubers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/affiliate">
                        Affiliate
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/donate">
                        Support me :D
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/contact">
                        Contact Us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Add
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}