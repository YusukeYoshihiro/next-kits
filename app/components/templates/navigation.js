import Link from 'next/link'

const Navigation = () => {
  return (
    <div>
      <Link href="/">
        <p>Index</p>
      </Link>
      <Link href="/about">
        <p>About</p>
      </Link>
    </div>
  )
}
export default Navigation
