import { useRouter } from 'next/router';

function ReviewDetail() {
    const router = useRouter();

    const { productId, reviewId } = router.query;
    return <h1>Review {reviewId} Product {productId}</h1>

}

export default ReviewDetail;
