import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function kampsteeg() {
  return (
    <Layout>
      <Head>
        <title>Kampsteeg</title>
      </Head>
      <Navbar />
      <Image src="/images/kampsteeg.jpg" alt="rust" width={650} height={434} />
      <div className="p-2 mt-0 bg-red-200">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
          KAMPSTEEG
        </h5>
        <p className="mb-3 leading-relaxed text-red-600">
          <h6 className="first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">												
          <p>Vanmorgen gelopen in de vrieskou</p>
							<p>met een temperatuur waar ik zo van hou.</p>
							<p>Met een frisse zon schijnend door de bomen</p>
							<p>beginnen wij langzaam aan lopend te stomen.</p>
							<p>Met handschoenen en iets op de kop</p>
							<p>Loop ik toch even met glans voorop.</p>
							<p>Amersfoortseweg af, Wilslaan en Soerenseweg omhoog</p>
							<p>en dat alles vrijwillig zonder ereboog.</p>
							<p>De Kampsteeg stijgend met een nostalgisch gevoel</p>
							<p>op weg naar de Echoput naar ons einddoel.</p>
							<p>De koffie en natuurlijk passend olliebollen</p>
							<p>Doen ons al pratend nog wat nadollen.</p>
																  </h6>
        </p><div>
        <h2   className="mb-1 text-xs font-medium tracking-widest text-center text-red-500 title-font">
                                        28 december 2014 Ton de Haan
                                        </h2>
      <Footer/>
   </div>
   </div>
    </Layout>
      )
}