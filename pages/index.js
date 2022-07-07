import Link from 'next/link'

export default function Home() {
 
  return (
    <>
      Home page in main layout

      <Link href="/admin">
          <a>Go to Admin</a>
      </Link>

    </>
  )
}
