import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='hero'>
        <Image 
        src="/hero2.jpg"
        alt='hero img'
        width={470}
        height={850}
        />
      </div>

    </>
  );
}
