import Link from "next/link";

export default function About() {
    return (
        <div>
            <div className="aboutpage">
                <p>about page</p>
                <Link href="/">
                    Home page
                </Link>
            </div>
        </div>
    )
}