import Hero from '@/components/Hero/Hero'
import Exclusive from '@/components/exclusive/Exclusive'
import Faq from '@/components/faq/Faq'
import PeoplSays from '@/components/peoplesays/PeoplSays'
import Plates from '@/components/plates/Plates'
import Points from '@/components/points/Points'
import Poplar from '@/components/popular/Poplar'
import Process from '@/components/process/Process'
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
      <section className='max-w-[2400px]  mx-auto'>
        <Plates />
        <Poplar />
        <Process/>
        <PeoplSays/>
      </section>
      <section>
        <Faq />
        
        {/* <Points/> */}
      </section>
</main>
  )
}
