import Footer from '/components/Footer'
import Image from 'next/image'
import Head from 'next/head'
import Layout, { siteTitle } from '/components/layout'
import utilStyles from '../styles/utils.module.css'
import { Navbar } from '/components/Navbar';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
       <Image
        src="/images/profile.jpg"
        alt="geluid"
        width={650}
        height={327}
      />
      <div className="p-2 bg-red-200">
      <div className='flex flex-col items-center justify-center h-full'>
       </div>
      <h5
                            className="p-1 font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
                            WIE WIJ ZIJN</h5>

                        <p className="first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl"> Wij zijn een
                            groep lopers uit Apeldoorn, ontstaan uit een initiatief van enkele
                            leerkrachten en ouders van Basisschool “De Wingerd” in 1993 om voor
                            een goed doel mee te doen aan de Croon 24 uurloop te Apeldoorn. Het
                            doel werd bereikt, de groep bleef bestaan en inmiddels vierden we in
                            2003 ons 10-jarig jubileum en in 2008 ons 15-jarig jubileum.
                            Een van de hoofddoelen van de huidige “selectie” is koffie en was
                            veel koek.
                            Op zondagochtend wordt er eerst nog wat gelopen of gewandeld of
                            gefietst</p>
                            <Footer/>                         
      </div>
        
    </Layout>
  )
}