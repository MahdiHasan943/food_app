import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-4 tablet:px-16'>
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
