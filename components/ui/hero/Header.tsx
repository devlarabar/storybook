import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <Image
                alt="Storybook Logo"
                src={'/logo.svg'}
                height={70}
                width={400}
            />
            <nav>
                <ul className="flex items-center justify-end gap-12 text-lg">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Web Development</Link>
                    </li>
                    <li>
                        <Link href="/">Marketing</Link>
                    </li>
                    <li>
                        <Link className="btn" href="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header