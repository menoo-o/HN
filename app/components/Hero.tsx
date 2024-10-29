
import Image from 'next/image'
import Social from './Social'

export default function Hero() {
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

        <Social />
</div>

    
      
    </>
  )
}
