import Link from 'next/Link';
import { useRouter } from 'next/router';
function Home() {
    
    const router = useRouter();

    const handleOrder = () => {
        console.log('Placing your order');
        router.push('/product');
    }
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
            <button onClick={handleOrder}>Place Order</button>
        </>
    )
}

export default Home;