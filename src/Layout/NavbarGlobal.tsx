import React from "react"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    // NavbarMenu,
    // NavbarMenuItem,

    Image,
    Link,
    Button
} from "@nextui-org/react"

export default function NavbarGlobal() {
    //const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    //const menuItems = [
    //    "วีทูปเบอร์",
    //    "สังกัด",
    //    "บอร์ดจัดอันดับ",
    //    "Discord"
    //]
    return (
        <Navbar> {/* onMenuOpenChange={setIsMenuOpen} */}
            <NavbarContent>
                {/* <NavbarMenuToggle
                    aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
                    className="sm:hidden"
                /> */}
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src="TuuperCoveLG.webp"
                            width={64}
                            height={64}
                            alt="TuuperCove Logo"
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent  justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/talent">
                        <p>วีทูปเบอร์</p>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/leaderboard" aria-current="page">
                        <p>บอร์ดจัดอันดับ</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/aff">
                        <p>สังกัด</p>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/discord" variant="flat">
                        Discord
                    </Button>
                </NavbarItem>
            </NavbarContent>
            {/* <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu> */}
        </Navbar>
    )
}