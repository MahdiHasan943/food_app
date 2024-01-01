import Hero from '@/components/Hero/Hero'
import Exclusive from '@/components/exclusive/Exclusive'
import Plates from '@/components/plates/Plates'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='largeMonitor:px-20 largestMonitor:px-[150px]'>
      {/* hero */}
      <section className='max-w-[2400px] mx-auto'>
        <Hero />
        <Exclusive/>
      </section>
      {/* categories & others */}
      <section className='max-w-[2400px] mx-auto'>
          <Plates/>
      </section>
</main>
  )
}
