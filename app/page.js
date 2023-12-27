import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='largeMonitor:px-20 largestMonitor:px-[150px]'>
      {/* hero */}
      <section>
           <Hero/>
      </section>
      {/* others */}
      <section>

      </section>
</main>
  )
}
