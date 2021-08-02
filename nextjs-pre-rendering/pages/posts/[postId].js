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
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false /* 1. fallback set to false lets to create all paths HTMl pages at build time
                        2. if fallback set to false then a 404 page is returned when path is doesn't exists for ex-> /posts/101 ->will return a 404 page */
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