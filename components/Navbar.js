import Link from 'next/link'
// import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar() {
//   const [session, loading] = useSession()
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      {/* <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}> */}
      <ul className={`main-nav `}>

        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/dashboard1'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href='/blog1'>
            Blog
          </Link>
        </li>

        {/* {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              
            </Link>
          </li>
        )} */}
         <li>
            <Link href='/api/auth/signin'>
              <p
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                Sign In
              </p>
            </Link>
          </li>
          <li>
            <Link href='/api/auth/signout'>
              <p
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </p>
            </Link>
          </li>
        {/* {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              
            </Link>
          </li>
        )} */}
      </ul>
    </nav>
  )
}

export default Navbar