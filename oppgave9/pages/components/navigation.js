import Link from 'next/link'

export default function Navigation() {
    return (
        <nav>
            <Link href="/signup"><a>Sign up</a></Link>
            <Link href="/users"><a>All users</a></Link>
        </nav>
    )
}