import Link from 'next/Link';
function ProductList({ productId = 100 }) {

    return (
        <>
            <Link href="/">
                <a>Home Page</a>
            </Link>
            <h2>
                <Link href="/product/1">
                    <a>Product Page 1</a>
                </Link>
            </h2>
            <h2>
                <Link href="/product/2">
                    <a>Product Page 2</a>
                </Link>
            </h2>
            <h2>
                <Link href="/product/3" replace>
                    <a>Product Page 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/product/${productId}`}>
                    <a>Product Page {productId}</a>
                </Link>
            </h2>
        </>
    );
}

export default ProductList;
