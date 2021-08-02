function Post({ post }) {

    return (
        <>
            <h2>{post.id}  {post.title}</h2>
            <h4>{post.title}</h4>
        </>
    )
}


export default Post;

// function to tell Next.js All possible paths to render statically
export async function getStaticPaths() {

    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
            {
                params: { postId: '4' }
            },
            {
                params: { postId: '9' } // Note that I display 10 posts and mentioning 9th post also as a possible value
            },
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data 
        }
    }
}