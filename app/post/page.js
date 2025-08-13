async function getPost(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json()
}

export default async function page(){
    const posts = await getPost();
    console.log(posts)

    return <>post page</>
}