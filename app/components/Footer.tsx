import Link from "next/link"


export default function Footer() {
  return (
    <>
      <footer className='footer'>
            <nav>
                <ul className='pg-links'>
                <li><Link href='/'>HOME</Link></li>
                <li><Link href="/music">MUSIC</Link></li>
                <li><Link href="/workshops">WORKSHOPS</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </footer>
 
    </>
  );
}
