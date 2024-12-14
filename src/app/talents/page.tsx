import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TalentsMain() {
    return (
        <div>
            <p>If you stay see this, please click this <Button><Link href={'/talent'}>Button</Link></Button></p>
        </div>
    )
}