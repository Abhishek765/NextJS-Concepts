import Link from 'next/Link';
function Home() {
    return (
        <>
            <h1>Home Page </h1>
            <Link href="/blog">
                <a>
                    Blog Page
                </a>
            </Link>
            <Link href="/product">
                <a>
                    Products Page
                </a>
            </Link>
        </>
    )
}

export default Home;