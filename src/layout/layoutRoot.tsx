import NavbarRoot from '@/layout/Navbar'
import FooterRoot from './Footer'

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <div>
            <NavbarRoot />
            {children}
            <FooterRoot />
        </div>
    )
}