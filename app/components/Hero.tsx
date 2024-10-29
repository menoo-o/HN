
import Image from 'next/image'
import Social from './Social'

export default function Hero() {
  return (
    <>
        <div className='hero-section'>
          {/* logo img */}
          <Image
            className="logo-img"
            src="/logo/4.jpg"
            alt="Logo img"
            width={250}
            height={210}
          />
          {/* hero */}
          <Image
            className="hero-img"
            src="/hero2.jpg"
            alt="Hero img"
            width={420}
            height={810}
          />

        <Social />
          </div>

    
      
    </>
  )
}
