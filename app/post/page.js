import Link from "next/link";


async function getPost(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json()
}

export default async function page(){
    const posts = await getPost();
    console.log(posts);

    return <>
      <h1>Post Page</h1>
      <ul>
        {posts.map((post,index)=><li key={index}><Link href={"./post/"+post.id}>{post.title}</Link></li>)}
      </ul>
    </>
}