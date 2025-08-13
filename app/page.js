import Link from "next/link"

export default async function Home() {  
  return <>
    <h1>HomePage</h1>
    <Link href="./about">go to about</Link>
    <Link href="./post">go to post</Link>
  </>
}
