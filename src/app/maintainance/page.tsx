import Link from "next/link"

export default function MaintainanceGG() {
    return (
        <div>
            <h1>Hi from second page!</h1>
            <Link href={`/${lng}`}>
                back
            </Link>
        </div>
    )
}