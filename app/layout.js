import { Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import TopBtn from '@/components/GotoTop/GotoTop'
import Provider from '@/context/provider'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
  display:'swap'
})

export const metadata = {
  title: 'Savor & Delight: Your Culinary Haven',
  description: 'Welcome to Savor & Delight, where every dish tells a story and every bite is a celebration of flavor. Our food is crafted with love, using the finest ingredients to create a symphony of tastes that will delight your palate. Join us for a gastronomic experience that goes beyond the ordinary, where passion meets plate, and every meal is a journey of culinary discovery',
}

export default function RootLayout({ children }) {
  console.log(children,"layout");
  return (
    <html lang="en">
      <body className={`${lato.className} scroll-smooth `}>
        <Provider>
        <Header />

        <main> 
            {children}
          </main>
          <Footer />

            </Provider>
        <TopBtn/>

      </body>
    </html>
  )
}
