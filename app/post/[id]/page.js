export async function generateStaticParams(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return posts.map(post=>({ id:post.id.toString() }))
}

export default async function page({params}){
    const {id} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return <>
        <h1>Post Details Page</h1>
        <div>
            <h2>Post Title - {post.title}</h2>
            <p>Post Body - {post.body}</p>
        </div>
    </>
}