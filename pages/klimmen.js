import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function klimmen() {
  return (
    <Layout>
      <Head>
        <title>Klimmen</title>
      </Head>
      <Navbar />
      <Image src="/images/lentestralen.jpg" alt="rust" width={650} height={434} />
      <div className="p-2 mt-0 bg-red-200">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
          LENTESTRALEN
        </h5>
              <p className="mb-3 leading-relaxed text-red-600">
          <h6 className="first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">												
          
          <p>Vanuit het Loo-park lopend op weg</p>

<p>Door een bos stralend van boom tot beukenheg.</p><br />

<p>De temperatuur heerlijk om in te trainen.</p>

<p>Helemaal als het lekker voelt met de benen.</p><br />

<p>De Naald gepasseerd op weg naar Agovv</p>

<p>met de rotonde richting de Wilslaan mee.</p><br />

<p>Dan blik op oneindig voorbij het apenheul</p>

<p>naar die Wilslaan die pittige, stijgende beul.</p><br />

<p>Vanaf de Soerenseweg is het nog een kort stuk</p>

<p>naar het Loo-park en voelt men met koffie het lopersgeluk.</p></h6></p>
<div>


                            <h2 className="mb-1 text-xs font-medium tracking-widest text-center title-font text-white-500">
                                14 december 2015 Ton de Haan.</h2>

      <Footer/>  
   
   </div>
    </div>
       
    </Layout>
  );
}