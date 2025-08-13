import Link from "next/link"

export default function page(){
    return <>
    About page
    <Link href="./">goto home</Link>
    <Link href="./post">goto post</Link>
    </>
}