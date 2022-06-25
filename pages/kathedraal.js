import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function kathedraal() {
  return (
    <Layout>
      <Head>
        <title>Kathedraal</title>
      </Head>
      <Navbar />
      <Image src="/images/kathedraal.jpg" alt="kathedraal" width={650} height={434} />
      <div className="mt-0 bg-red-200 p-">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
Kathedraal        </h5>
<p className="mb-3 leading-relaxed ">
                        <h6 className="p-2 first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">

                            <p>Op een wandeling nabij de Echoput</p>

                            <p>Ontwaren wij kunst van enig nut.</p><br />

                            <p>Midden in een geurend, groenkleurend bosperceel</p>
                            <p>wordt de verwondering een verrassend onderdeel.</p><br />

                            <p>Men vindt middels boomstammen de vorm van een kathedraal</p>

                            <p>van brons die gaan met de natuurlijke omgeving aan de haal.</p><br />

                            <p>De vorm van de kathedraal van Reims in Frankrijk</p>

                            <p>trekt hier in het bos niet niet veel kijk.</p><br />

                            <p>Kunst blijft een ongrijpbaar fenomeen</p>

                            <p>is die er voor de kunstenaar alleen?</p><br />

                            <p>Dit kunstwerk in bos doet vele oordelen vellen</p>

                            <p>wij zouden niet direct voor een tweede bestelling bellen</p></h6></p>
                            <h2 className="mb-1 text-xs font-medium tracking-widest text-center text-red-500 title-font">7 juni 2015 Ton</h2></div>    
                            <Footer/>

    </Layout>
      )
}