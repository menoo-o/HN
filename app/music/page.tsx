// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import './style.css'; // Import the CSS file for styling

export default function Page() {
  return (
    <div className="page-container">
      {/* Centered Logo */}
      <div className="logo-container">
        <Image 
            src="/logo/4.jpg" 
            alt="Logo"  
            width={250}
            height={210} className="logo" />
      </div>

      {/* Albums Section */}
      <div className="albums-container">
        <div className="album">
          <Link href="https://www.youtube.com/watch?v=dPgEVzlwejY" target='_blank'>
            <Image src="/album1.jpg" alt="Album 1" width={240} height={230} className="album-image" />
          </Link>
          <h2 className="album-title">When life gives you lemons</h2>
        </div>

        <div className="album">
          <Link href="https://www.youtube.com/watch?v=4twO84JG_Bc" target='_blank'>
            <Image src="/album2.jpg" alt="Album 2" width={240} height={230} className="album-image" />
          </Link>
          <h2 className="album-title">Mulchedi</h2>
        </div>
      </div>
    </div>
  );
}
