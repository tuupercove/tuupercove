import NavbarGlobal from "./NavbarGlobal"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <NavbarGlobal />
            {children}
        </div>
    )
}