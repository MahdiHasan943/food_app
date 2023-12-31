import Hero from '@/components/Hero/Hero'
import Exclusive from '@/components/exclusive/Exclusive'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='largeMonitor:px-20 largestMonitor:px-[150px]'>
      {/* hero */}
      <section>
        <Hero />
        <Exclusive/>
      </section>
      {/* others */}
      <section>

      </section>
</main>
  )
}
