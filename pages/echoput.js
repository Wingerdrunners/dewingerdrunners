import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function echoput() {
  return (
    <Layout>
      <Head>
        <title>Echoput</title>
      </Head>
      <Navbar />
      <Image src="/images/echoput.jpg" alt="rust" width={650} height={434} />
      <div className="p-2 mt-0 bg-red-200">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
          ECHOPUT
        </h5>
        <p className="mb-3 leading-relaxed text-red-600">
          <h6 className="first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">												
          <p>Zondagmorgen lopen bij de echoput.</p>
          <p>ieder zijn voor zijn afstand tot eigen nut. </p>
                                <p>Vandaag de diversiteit ervaren</p>
                                <p>van hardlopers in een flow zonder blaren</p>
                               <p> en hardlopers met oog voor natuur</p>
                                <p>met afstanden van mindere duur.</p>
                                <p>Aan het eind zich te goed doen aan</p>
                                <p>koffie, thee, water, koek bij het stilstaan.</p>
                                <p>Een al jaren terugkerend ritueel</p>
                                <p>Het maakt me bijna sentimenteel.</p>
															</h6>	  </p>
        
        <h2   className="mb-1 text-xs font-medium tracking-widest text-center text-red-500 title-font">
        10 november 2014 Ton de Haan.
                                        </h2>
      <Footer/>
   </div>
   
    </Layout>
      )
}