//! This is Dynamic Page for each post

function Post({ post }) {

    return (
        <>
            <h2>{post.id}  {post.title}</h2>
            <h4>{post.title}</h4>
        </>
    )
}


export default Post;

// function to tell Next.js All  possible paths/pages to render statically(at build time)
// ? 1. fallback: false
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // Fetching list of paths in a dynamic page
    // const paths = data.map(post => {
    //     return {
    //         params: {
    //             postId: `${post.id}`
    //         }
    //     }
    // })

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
            }
        ],
        fallback: false /* 1. fallback set to false lets to create all paths HTMl pages at build time
                        2. if fallback set to false then a 404 page is returned when path is doesn't exists for ex-> /posts/101 ->will return a 404 page 
                        3. Suitable when we have few static pages to show
                        4. Ex: Blog site with few articles
                        */
    }
}



// SSG (getStaticProps) with dynamic parameters
// Helpful in case of rendering individual posts statically
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}