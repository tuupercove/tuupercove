import NavbarRoot from '@/layout/Navbar'

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div>
            <NavbarRoot />
            {children}
        </div>
    )
}