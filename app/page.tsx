import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faSpotify,
  faSoundcloud,
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>

     <div className='hero-section'>
      <Image
        className="logo-img"
        src="/logo/4.jpg"
        alt="Logo img"
        width={260}
        height={230}
      />
      <Image
        className="hero-img"
        src="/hero2.jpg"
        alt="Hero img"
        width={435}
        height={835}
      />
    </div>
    <div className='icons-left'>
        <FontAwesomeIcon icon={faYoutube} /> 
        <FontAwesomeIcon icon={faSpotify} /> 
        <FontAwesomeIcon icon={faSoundcloud} /> 
      </div>
      <div className='icons-right'>
        <FontAwesomeIcon icon={faFacebook} /> 
        <FontAwesomeIcon icon={faInstagram} /> 
        <FontAwesomeIcon icon={faTwitter} /> 
      </div>

    <footer className='footer'>
      <nav>
        <ul className='pg-links'>
          <li><Link href='/'>HOME</Link></li>
          <li><Link href='/music'>MUSIC</Link></li>
          <li><Link href='/shows'>SHOWS</Link></li>
          <li><Link href='/contact'>CONTACT</Link></li>
        </ul>
     </nav>
</footer>



    </>
  );
}
